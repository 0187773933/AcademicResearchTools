from playwright.sync_api import sync_playwright
import pandas as pd
import string

URL = "https://journals-ohiolink-edu.ezproxy.libraries.wright.edu/acprod/odb_ejc/r/ejc/search/journals"

rows = []

# ---------- APEX helpers ----------

def wait_refresh(page):
    # Oracle APEX spinner appears during refresh
    try:
        page.wait_for_selector(".u-Processing", state="visible", timeout=5000)
    except:
        pass
    page.wait_for_selector(".u-Processing", state="hidden", timeout=60000)


def apply_filter(page):
    page.click("#B218779819617672124")
    wait_refresh(page)


def set_rows_1000(page):
    page.select_option("#P270_ROWS_PER_PAGE", "1000")
    apply_filter(page)


# ---------- scrolling pagination ----------

def autoload_all_rows(page):
    last = -1
    stable_rounds = 0

    while True:
        count = page.locator("table tbody tr").count()
        print("      rows:", count)

        if count == last:
            stable_rounds += 1
        else:
            stable_rounds = 0

        if stable_rounds >= 3:
            break

        last = count

        page.evaluate("""
        () => {
            const report = document.querySelector('.t-Report-report');
            if (report) report.scrollTop = report.scrollHeight;
            window.scrollTo(0, document.body.scrollHeight);
        }
        """)

        page.wait_for_timeout(1400)


# ---------- data extraction ----------

def parse_table(page):
    data = page.evaluate("""
    () => {
        const rows = [];
        document.querySelectorAll("table tbody tr").forEach(tr => {

            const get = h => tr.querySelector(`[headers="${h}"]`)?.innerText.trim() || "";

            const title = get("TITLE");
            const issn_text = get("ISSN");
            const year = get("YEAR_RANGE");
            const vendor = get("VENDOR_NAME");
            const publisher = get("PUBLISHER_NAME");

            const btn = tr.querySelector("button[data-permalink]");
            const permalink = btn ? btn.getAttribute("data-permalink") : "";

            if(!title) return;

            issn_text.split(/[\\s,]+/).forEach(issn=>{
                if(issn){
                    rows.push({
                        Journal: title,
                        ISSN: issn,
                        Coverage: year,
                        Vendor: vendor,
                        Publisher: publisher,
                        Permalink: permalink
                    });
                }
            });
        });
        return rows;
    }
    """)
    rows.extend(data)


# ---------- per-letter ----------

def scrape_letter(page, letter):
    print(">>>", letter)

    page.select_option("#P270_START_LETTER", letter)
    apply_filter(page)

    autoload_all_rows(page)
    parse_table(page)


# ---------- main ----------

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context(storage_state="state.json")
    page = context.new_page()

    page.goto(URL)
    page.wait_for_load_state("networkidle")

    # IMPORTANT
    set_rows_1000(page)

    letters = list(string.ascii_uppercase) + ["~"]

    for letter in letters:
        scrape_letter(page, letter)

    browser.close()


df = pd.DataFrame(rows).drop_duplicates()
df.to_csv("ohiolink_full_table.csv", index=False)

print("\nDONE")
print("ISSN rows:", len(df))
print("Unique journals:", df['Journal'].nunique())
