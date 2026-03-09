## <span style='color:#61CC9E'>Accessing Papers Faster</span>

- **Wright States DOI Proxy**
  - Wright state ( and most colleges ) have a doi-org proxy , where all you have to do is append the DOI at the end , and it will route you through your institutions access to scientific journals. This is much faster than navigating each individual journal's link from the wright state online library portal.
  - just add the doi to whatever paper you want at the end
  - https://doi-org.ezproxy.libraries.wright.edu/@DOI_GOES_HERE@
  - Example : https://doi-org.ezproxy.libraries.wright.edu/10.1007/s12311-012-0355-9
  - I setup a "redirector" because I didn't want to type that out every time on my phone.
  - Its up to you , but you can also use the thing I setup here in the same way , just add the correct doi or link at the end
    - https://doi.34353.org/10.1007/s12311-012-0355-9

  - all it does is redirect you to the same [doi-org.ezproxy.libraries.wright.edu](http://doi-org.ezproxy.libraries.wright.edu) website.
    - https://en.wikipedia.org/wiki/URL_redirection
- **Wright State Research Guides**
	- https://guides.libraries.wright.edu

- **Sci-Hub**

  - https://sci-hub.do
  	- https://sci-hub.se/@DOI_GOES_HERE@

  	- Example : https://sci-hub.se/10.1016/S0387-7604(03)00056-1

  - check [here](https://vk.com/sci_hub) for latest url ( it changes frequently )
  - if you install this browser extension called [tampermonkey](https://www.tampermonkey.net/)
  	- it allows you to install then what it calls "userscripts" ( basically they are like browser extensions )

  	- but then you can install these userscripts which should add a "open in scihub" button everywhere it can find a DOI on the page
  		- https://greasyfork.org/en/scripts/370246-sci-hub-button

  	- this script will remove the sci-hub iframe , and take you straight to the pdf view
  		- https://greasyfork.org/en/scripts/29777-sci-hub-out
  		- once you install this one you might have to edit the source and update the links
  			- because the developer doesn't always update it as soon as sci-hub changes there url
  - **Or** 
  	- first install [tampermonkey](https://www.tampermonkey.net/)
  	- then install [this script](https://39363.org/NOTES/WSU/MISC/DOI-BUTTON.user.js) which has everything in one , plus a WSU button
  	- Example = [google scholar search](https://images.34353.org/1683816646695-324259468.jpeg)
  - If sci-hub doesn't have something , you can make an account and ask here :

    - http://www.wosonhj.com

- **Google Scholar Library Links**
  - Setup Steps = [Here](https://39363.org/IMAGE_BUCKET/1648484047359-753972138.png)
  - Note :
  	- If you are using the [zotero proxy](https://images.34353.org/1683818244217-363465212.jpeg)
  	- you can still use the normal zotero extension to send pdfs to the app
  	- But if you are also using the zotero proxy to point to the Wright State proxy already :
  		- then also setting up google scholar library links can make things 
  		- I would set this up on a completely separate and different internet browser than you normally use


## <span style='color:#61CC9E'>Rankings</span>

- [Web of Science](https://access-clarivate-com.ezproxy.libraries.wright.edu/login?app=wos&detectSession=true)

- https://scite.ai

  - It has a good [browser extension](https://chrome.google.com/webstore/detail/scite/homifejhmckachdikhkgomachelakohh) :
    - This will add a panel to google scholar and PubMed search results indicating the "rankings" of the paper.
    	- the higher the numbers , the more "popular" it is , and most likely the "better" it is


  <img src="https://images.34353.org/1683820434836-935229734.jpeg" style="zoom:67%;" />

  - if you make an account :
  	- you can load a paper , scroll to the very bottom and click on "[visualize report](https://39363.org/IMAGE_BUCKET/1644172561528-829305870.png)".
  	- it can show you how articles are interconnected

- https://www.researchrabbit.ai/

## <span style='color:#61CC9E'>Citation Generators</span>

- [https://www.zotero.org](https://www.zotero.org)

  - you can install the browser extension , to "send papers" into the zotero desktop app.

  - you can set up folders in zotero , and then whichever folder you have  active on the desktop app at the time is the one the browser extension  will save it to.

  - also , you can use the microsoft word addon , to add citations from your zotero library

  - then at the end , it will auto generate your bibliography in the format of your choosing, ( journal of neuroscience )

  - https://39363.org/IMAGE_BUCKET/1648681877302-805708507.png

  - the zotero browser extension also has an option to configure an ezproxy , so instead of the library links option from google scholar ,

  	- goto zotero browser extension settings --> Proxies --> "Enable proxy redirection" --> Create a New Proxy
  	- `%h.ezproxy.libraries.wright.edu/%p` 
  	- https://39363.org/IMAGE_BUCKET/1654190493798-150894980.png
  	
  	
  	

- https://www.citationmachine.net/the-journal-of-neuroscience/cite-a-journal

- https://www.citationmachine.net/the-journal-of-neuroscience/cite-a-website

- https://www.jneurosci.org/content/information-authors#preparing_a_manuscript

## <span style='color:#61CC9E'>Browser Extensions</span>

- **Firefox :**
	- [Dark Reader](https://addons.mozilla.org/firefox/addon/addon@darkreader.org)
	- [One Tab](https://addons.mozilla.org/firefox/addon/extension@one-tab.com)
	- [Open Image In New Tab](https://addons.mozilla.org/firefox/addon/open-image-in-new-tab@mint.as)
	- [Tampermonkey](https://addons.mozilla.org/firefox/addon/firefox@tampermonkey.net)
	- [Tab Session Manager](https://addons.mozilla.org/firefox/addon/Tab-Session-Manager@sienori)
	- [Image Max URL](https://addons.mozilla.org/firefox/addon/maxurl@qsniyg)
	- [Zotero](https://addons.mozilla.org/firefox/addon/zotero@chnm.gmu.edu)
	- [uBlock](https://addons.mozilla.org/firefox/addon/uBlock0@raymondhill.net)
	- [YouTube Screen Shot](https://addons.mozilla.org/firefox/addon/screenshots@mozilla.org)
	- [Better Image Viewer](https://addons.mozilla.org/firefox/addon/betterimageviewer@darktrojan.net)
	- [Popup Blocker](https://addons.mozilla.org/en-US/firefox/addon/popup-blocker/)

- **Chrome :**
	- [Google Scholar PDF Reader](https://chromewebstore.google.com/detail/google-scholar-pdf-reader/dahenjhkoodjbpjheillcadbppiidmhp)
	- [Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)
	- [Enhanced Image Viewer](https://chrome.google.com/webstore/detail/enhanced-image-viewer/gefiaaeadjbmhjndnhedfccdjjlgjhho)
	- [Imagus](https://chrome.google.com/webstore/detail/imagus/immpkjjlgappgfkkfieppnmlhakdmaab)
	- [Lazy Scholar](https://chrome.google.com/webstore/detail/lazy-scholar/fpbdcofpbclblalghaepibbagkkgpkak)
	- [OneTab](https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall)
	- [Popup Blocker](https://chrome.google.com/webstore/detail/popup-blocker-strict/aefkmifgmaafnojlojpnekbpbmjiiogg)
	- [PubMed Impact Factor Search](https://chrome.google.com/webstore/detail/pubmed-impact-factor-sear/amhcplabblldkpggfncgnemdbpafbfog)
	- [Pubmed Impact Factor](https://chrome.google.com/webstore/detail/pubmed-impact-factor/npblmhpjbopmmaadpmheopjelggjnogh)
	- [Scholar H-Index Calculator](https://chrome.google.com/webstore/detail/scholar-h-index-calculato/cdpobfbhbdlpbloccjokjgekjnmifbng)
	- [Scholarcy](https://chrome.google.com/webstore/detail/scholarcy-research-paper/oekgknkmgmaehhpegfeioenikocgbcib)
	- [Scite](https://chrome.google.com/webstore/detail/scite/homifejhmckachdikhkgomachelakohh)
	- [Search by Image](https://chrome.google.com/webstore/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci)
	- [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
	- [Wayback Machine](https://chrome.google.com/webstore/detail/wayback-machine/fpnmgdkabkmnadcjpehmlllkndpkmiak)
	- [Web Archives](https://chrome.google.com/webstore/detail/web-archives/hkligngkgcpcolhcnkgccglchdafcnao)
	- [Zotero Connector](https://chrome.google.com/webstore/detail/zotero-connector/ekhagklcjbdpajgpjgmbionohlpdbjgc)
	- [Bypass Paywalls](https://gitlab.com/magnolia1234/bypass-paywalls-firefox-clean)


![](https://39363.org/IMAGE_BUCKET/1650655930979-214587270.jpg)
