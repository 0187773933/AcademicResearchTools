import pandas as pd
import re

# ---------- load ----------
jcr = pd.read_excel("JCR_JournalResults_02_2026.xlsx", skiprows=2)
ohio = pd.read_csv("ohiolink_full_table.csv")

# ---------- normalize ----------
def clean_issn(x):
    if pd.isna(x):
        return None
    x = str(x).upper()
    x = re.sub(r'[^0-9X]', '', x)
    if len(x) == 8:
        return x
    return None

# clean ohio
ohio["ISSN_CLEAN"] = ohio["ISSN"].apply(clean_issn)

# expand JCR into long form (print + electronic ISSN)
records = []

for _, row in jcr.iterrows():
    for col in ["ISSN", "eISSN"]:
        issn = clean_issn(row[col])
        if issn:
            r = row.to_dict()
            r["ISSN_CLEAN"] = issn
            records.append(r)

jcr_long = pd.DataFrame(records)

print("JCR ISSN rows:", len(jcr_long))
print("OhioLINK ISSN rows:", len(ohio))

# ---------- merge ----------
merged = jcr_long.merge(ohio, on="ISSN_CLEAN", how="inner")

print("Matched rows:", len(merged))
print("Matched journals:", merged["Journal name"].nunique())

# ---------- sort ----------
merged = merged.sort_values("2024 JIF", ascending=False)

# ---------- save ----------
merged.to_excel("OhioLINK_ranked_by_impact.xlsx", index=False)

print("Saved: OhioLINK_ranked_by_impact.xlsx")
