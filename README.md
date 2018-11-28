# Hópverkefni 2

INFO. The project consists of crafting the prototype of the lecture web for the web development course. Given the data which is covering the winter study material.

INFO. Given are [examples](utlit/) in `500px` and `1500px` without the grid along with `1500px` with grid. All the material should scale neatly in between.

## Almennt

INFO. The data is given in `lectures.json` which should be picked up with _ajax_. The project is ran with `browser-sync` to make it work.

**TO DO.** Page material should not be wider than `1200px`. Colors and images in the header shall fill up all the horizontal space. Over the images is 60% opaque white color. Images for each lecture are defined in `json` file.

DONE. Base font size is 16px and all other fonts adopt the following scaling: `16 24 32 48`.

DONE. Color palette for the web is `#000`, `#999`, `#aaa`, `#ccc`, `#2d2`, `#1a1`, `#fcffd2` and `#cc9694`.

DONE. Letters for the main part are Lora, Times New Roman or serif letters. Letters for headings are Roboto Mono, Courier New or monospace.

INFO. Most of all is set up in 12 columns grid with `20px` gutter.

INFO. All intervals are half, whole, double or triple of the gutter. Possible to use the ruler (t.d. http://www.arulerforwindows.com/ or http://www.pascal.com/software/freeruler/) to find the exact sizes, but the most that matters is that solution is similar and is not exactly as in the example.

DONE. All animation is done in `300ms` with `ease-in-out` acceleration function. Animations take place when hovered over the lectures in the list and filter buttons.

## Forsíða

**TO DO.** Front page contains the list of all lectures. It becomes indicated whether it is finished or not. Checkmark `✓` should be used to indicate that the lecture is finished, See below how it functions.

DONE. Three buttons, one for each group should be above the list: `HTML`, `CSS` og `JavaScript`. In the beginning none of the buttons are active and when the button is activated lectures in the active group should only be displayed and the button should be colored with `#2d2`. If more buttons are activated should also show lectures from this group. If all the buttons are activated it is the same as if all are deactivated showing all the lectures.

DONE. When clicked on the lecture it is redirected over to `fyrirlestur.html?slug=<slug>` where `<slug>` is _slug_ for the lecture, e.g. `fyrirlestur.html?slug=html-sagan`. Possible to use `URLSearchParams` and `window.location.search` to know to which lecture is directed on `fyrirlestur.html` page.

## Fyrirlestur

DONE. For each lecture should display header and all the lecture material that comes after that. In the header comes group and title.

**TO DO.** Lecture material is stored in an array and should display it in the same order as it is defined. Appearance for each unit should be prepared according to the outlook.

**TO DO.** At the bottom is a button to mark a lecture that is finished and link to go back.

### Kláraður fyrirlestur

**TO DO.** If a lecture marked finished should show `✓ Fyrirlestur kláraður` in `#2d2`. Otherwise `Klára fyrirlestur`. When lecture is finished should save the information about it in `localStorage` and display in a list and on a lecture page.

**TO DO.** `slug` should be used as an ID for finished lectures.

## Fyrirlestragögn

DONE. `lectures.json` contains an array of lectures that should be displayed. Each lecture can have:

* `slug`, used to link the lecture
* `title`, lecture title
* `category`, lecture group
* `image`, image in the lecture header, may skip, then a gray color should be displayed
* `thumbnail`, image of a lecture overview, may skip, then should display gray color instead
* `content`, array of lecture material

INFO. For lecture material the content is always:

* `type`, type of material
* `data`, data of material

where `type` can be:

* DONE. `youtube`, `data` contains a link to youtube video. Should include the video with `<iframe src="<URL>" frameborder="0" allowfullscreen="0"></iframe>`.
* DONE. `text`, `data` contains the data where `\n` marks between the paragraphs, such that a text should be displayed within `<p>`, changed over to `\n`
* `quote`, `data` contains citation, additionaly can be `attribute` with what it is referenced to
* DONE. `image`, `data` contains path to image, additionally can be `caption` with text and image
* DONE. `heading`, `data` contains headings
* `list`, `data` contains array of text in a list
* DONE. `code`, `data` contains code where interval and new lines matter

INFO. Note that more material can add with what is given in the beginning. The functionality should dominate regardless of whatever material in whatever form is, as long as it follows the rules above.

## Hópavinna

Verkefnið skal unnið í hóp með þremur einstaklingum. Hafið samband við kennara ef ekki er mögulegt að vinna í hóp.

Notast skal við Git og GitHub. Engar zip skrár með kóða ættu að ganga á milli í hópavinnu, heldur á að „committa“ allan kóða og vinna gegnum Git.

## Lýsing á verkefni

`README.md` skrá skal vera í rót verkefnis og innihalda:

* Upplýsingar um hvernig keyra skuli verkefnið
* Lýsingu á uppsetningu verkefnis, hvernig því er skipt í möppur, hvernig CSS og JavaScript er skipulagt og fleira sem á við
* Upplýsingar um alla sem unnu verkefni
* Leyfilegt er að halda eftir þessari verkefnalýsingu en hún skal þá koma _á eftir_ ykkar lýsingu

## Tæki og tól

Eftirfarandi er sett upp í verkefni:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`

Setja þarf upp

* `rollup` til að pakka saman JavaScript kóða
* `babel` til að _transpila_ kóða

og bæta við í tól að ofan.

## Mat

* 30% - `README` eftir forskrift, tæki og tól uppsett. Snyrtilegt, gilt (skv. eslint) JavaScript. Snyrtilegt, gilt (skv. stylelint) CSS/Sass, gilt og aðgengilegt HTML. Git notað
* 30% – Yfirlitssíða með síu
* 30% – Fyrirlestrarsíða útfærð með efni
* 10% – Hægt að skrá að fyrirlestur sér kláraður

## Sett fyrir

Verkefni sett fyrir á Uglu föstudaginn 9. nóvember 2018.

## Skil

Einn aðili úr hóp skal skila fyrir hönd allra og skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags fimmtudaginn 29. nóvember 2018, seinustu dæmatímar eru þann fimmtudag.

Skil skulu innihalda:

* Nöfn allra í hóp ásamt notendanafni
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `gorri4`, `mimiqkz`, `hinriksnaer`, `gunkol`, `freyrdanielsson` og `osk`
* Slóð á verkefnið keyrandi á vefnum

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö stærri verkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

## Myndir

Myndir frá:

* https://unsplash.com/photos/xekxE_VR0Ec
* https://unsplash.com/photos/C4G18Paw0d4
* https://unsplash.com/photos/iar-afB0QQw

---

> Útgáfa 0.2

### Útgáfusaga

| Útgáfa | Lýsing                                |
|--------|---------------------------------------|
| 0.1    | Fyrsta útgáfa                         |
| 0.2    | Setja inn auka efni í `lectures.json` |
