const PHRASES = [
  {id:"water",category:"needs",emoji:"💧",tint:"#e7f5ff",en:"I need water",ta:"எனக்கு தண்ணீர் வேண்டும்",hi:"मुझे पानी चाहिए"},
  {id:"food",category:"needs",emoji:"🍎",tint:"#fff1e8",en:"I am hungry",ta:"எனக்குப் பசிக்கிறது",hi:"मुझे भूख लगी है"},
  {id:"thirsty",category:"needs",emoji:"🥤",tint:"#e7f5ff",en:"I am thirsty",ta:"எனக்கு தாகமாக இருக்கிறது",hi:"मुझे प्यास लगी है"},
  {id:"toilet",category:"needs",emoji:"🚻",tint:"#eaf7ef",en:"I need the toilet",ta:"எனக்கு கழிப்பறை செல்ல வேண்டும்",hi:"मुझे शौचालय जाना है"},
  {id:"rest",category:"needs",emoji:"🛏️",tint:"#f2edff",en:"I need a rest",ta:"எனக்கு ஓய்வு வேண்டும்",hi:"मुझे आराम चाहिए"},
  {id:"sleep",category:"needs",emoji:"😴",tint:"#edf0ff",en:"I am sleepy",ta:"எனக்கு தூக்கம் வருகிறது",hi:"मुझे नींद आ रही है"},
  {id:"hot",category:"needs",emoji:"🥵",tint:"#fff0e6",en:"I feel hot",ta:"எனக்கு சூடாக இருக்கிறது",hi:"मुझे गर्मी लग रही है"},
  {id:"cold",category:"needs",emoji:"🥶",tint:"#e8f6ff",en:"I feel cold",ta:"எனக்கு குளிராக இருக்கிறது",hi:"मुझे ठंड लग रही है"},
  {id:"happy",category:"feelings",emoji:"😊",tint:"#fff5d9",en:"I am happy",ta:"நான் மகிழ்ச்சியாக இருக்கிறேன்",hi:"मैं खुश हूँ"},
  {id:"sad",category:"feelings",emoji:"😢",tint:"#eaf2ff",en:"I am sad",ta:"நான் சோகமாக இருக்கிறேன்",hi:"मैं उदास हूँ"},
  {id:"angry",category:"feelings",emoji:"😠",tint:"#ffeded",en:"I am angry",ta:"எனக்கு கோபமாக இருக்கிறது",hi:"मुझे गुस्सा आ रहा है"},
  {id:"scared",category:"feelings",emoji:"😟",tint:"#f4edff",en:"I feel scared",ta:"எனக்கு பயமாக இருக்கிறது",hi:"मुझे डर लग रहा है"},
  {id:"pain",category:"feelings",emoji:"❤️‍🩹",tint:"#ffedf0",en:"I am in pain",ta:"எனக்கு வலிக்கிறது",hi:"मुझे दर्द हो रहा है"},
  {id:"tired",category:"feelings",emoji:"😮‍💨",tint:"#f1f2f7",en:"I feel tired",ta:"நான் சோர்வாக இருக்கிறேன்",hi:"मैं थका हुआ महसूस कर रहा हूँ"},
  {id:"help",category:"help",emoji:"🆘",tint:"#fff0e9",en:"I need help",ta:"எனக்கு உதவி வேண்டும்",hi:"मुझे मदद चाहिए"},
  {id:"stop",category:"help",emoji:"✋",tint:"#ffeded",en:"Please stop",ta:"தயவுசெய்து நிறுத்துங்கள்",hi:"कृपया रुकिए"},
  {id:"break",category:"help",emoji:"⏸️",tint:"#fff5dc",en:"I need a break",ta:"எனக்கு சிறிது இடைவேளை வேண்டும்",hi:"मुझे थोड़ा विराम चाहिए"},
  {id:"unsafe",category:"help",emoji:"🛡️",tint:"#eaf7ef",en:"I do not feel safe",ta:"எனக்கு பாதுகாப்பாக இல்லை",hi:"मैं सुरक्षित महसूस नहीं कर रहा हूँ"},
  {id:"yes",category:"social",emoji:"👍",tint:"#e6f6ee",en:"Yes, please",ta:"ஆம், தயவுசெய்து",hi:"हाँ, कृपया"},
  {id:"no",category:"social",emoji:"🙅",tint:"#fff0ed",en:"No, thank you",ta:"வேண்டாம், நன்றி",hi:"नहीं, धन्यवाद"},
  {id:"thankyou",category:"social",emoji:"🙏",tint:"#fff5d9",en:"Thank you",ta:"நன்றி",hi:"धन्यवाद"},
  {id:"hello",category:"social",emoji:"👋",tint:"#eaf4ff",en:"Hello",ta:"வணக்கம்",hi:"नमस्ते"},
  {id:"play",category:"activities",emoji:"🎮",tint:"#f1eaff",en:"I want to play",ta:"எனக்கு விளையாட வேண்டும்",hi:"मैं खेलना चाहता हूँ"},
  {id:"music",category:"activities",emoji:"🎵",tint:"#f2edff",en:"I want music",ta:"எனக்கு இசை வேண்டும்",hi:"मुझे संगीत सुनना है"}
];
const UI = {
  "en-US":{welcome:"Every voice matters.",subtitle:"Choose a message, build a sentence, and let your voice be heard.",selected:"Selected",prompt:"Tap ＋ on messages to build a sentence.",speak:"Speak",add:"Added to sentence",language:"English"},
  "ta-IN":{welcome:"ஒவ்வொரு குரலும் முக்கியம்.",subtitle:"ஒரு செய்தியைத் தேர்ந்தெடுத்து, வாக்கியத்தை உருவாக்கி, உங்கள் குரலை வெளிப்படுத்துங்கள்.",selected:"தேர்ந்தெடுத்தது",prompt:"வாக்கியம் உருவாக்க ＋ என்பதைத் தட்டவும்.",speak:"பேசு",add:"வாக்கியத்தில் சேர்க்கப்பட்டது",language:"Tamil"},
  "hi-IN":{welcome:"हर आवाज़ मायने रखती है।",subtitle:"एक संदेश चुनें, वाक्य बनाएँ और अपनी बात कहें।",selected:"चुना गया",prompt:"वाक्य बनाने के लिए संदेशों पर ＋ दबाएँ।",speak:"बोलें",add:"वाक्य में जोड़ा गया",language:"Hindi"}
};
const CATEGORY_NAMES = {needs:"Basic needs",feelings:"Feelings",help:"Help & safety",social:"People & social",activities:"Activities"};
const STORAGE_KEYS = {favourites:"bvc_v2_favourites",recent:"bvc_v2_recent",custom:"bvc_v2_custom",prefs:"bvc_v2_prefs"};
let language = "en-US", selectedSentence = [], toastTimer, voices = [];
let favourites = readStorage(STORAGE_KEYS.favourites, []);
let recent = readStorage(STORAGE_KEYS.recent, []);
let customPhrases = readStorage(STORAGE_KEYS.custom, []);
let prefs = readStorage(STORAGE_KEYS.prefs, {rate:0.85,autoSpeak:true,showText:true,reduceMotion:false});
let currentPage = "home";

function readStorage(key, fallback){try{const value=JSON.parse(localStorage.getItem(key));return value ?? fallback;}catch{return fallback;}}
function saveStorage(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{showToast("Browser storage is unavailable. Changes may not persist.");}}
function allPhrases(){return [...PHRASES,...customPhrases];}
function phraseText(phrase,lang=language){const key=lang==="ta-IN"?"ta":lang==="hi-IN"?"hi":"en";return phrase[key] || phrase.en || phrase.ta || phrase.hi || "";}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function showToast(message){const el=document.getElementById("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2400);}
function setPage(page){currentPage=page;document.querySelectorAll(".page").forEach(el=>el.classList.toggle("active-page",el.id===`page-${page}`));document.querySelectorAll(".nav-item").forEach(el=>el.classList.toggle("active",el.dataset.page===page));const names={home:"Home",communicate:"Communication board",favourites:"Favourites",recent:"Recent phrases",settings:"Settings"};document.getElementById("pageCrumb").textContent=names[page]||"Home";document.getElementById("sidebar").classList.remove("mobile-open");if(page==="communicate")renderBoard();if(page==="favourites")renderFavourites();if(page==="recent")renderRecent();window.scrollTo({top:0,behavior:prefs.reduceMotion?"auto":"smooth"});}
function changeLanguage(next){language=next;document.getElementById("language").value=next;document.getElementById("settingsLanguage").value=next;document.documentElement.lang=next==="ta-IN"?"ta":next==="hi-IN"?"hi":"en";const ui=UI[next];document.getElementById("welcomeTitle").textContent=ui.welcome;document.getElementById("welcomeSubtitle").textContent=ui.subtitle;renderBoard();renderFavourites();renderRecent();renderHomeRecent();renderSentence();document.getElementById("phraseTotal").textContent=allPhrases().length;}
function getVoices(){if("speechSynthesis"in window)voices=window.speechSynthesis.getVoices()||[];}
function getVoice(lang){const prefix=lang.split("-")[0].toLowerCase();return voices.find(v=>v.lang.toLowerCase()===lang.toLowerCase())||voices.find(v=>v.lang.toLowerCase().startsWith(prefix+"-"))||null;}
function speak(text){if(!text)return;if(!("speechSynthesis"in window)){showToast("Speech is not supported in this browser. Try an updated version of Chrome.");return;}getVoices();window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);const voice=getVoice(language);utterance.lang=voice?voice.lang:language;if(voice)utterance.voice=voice;utterance.rate=Number(prefs.rate)||0.85;utterance.pitch=1;utterance.volume=1;utterance.onerror=event=>{if(event.error!=="canceled"&&event.error!=="interrupted")showToast("Speech could not start. Check your device's speech settings.");};window.speechSynthesis.speak(utterance);}
function usePhrase(id,shouldSpeak=true){const phrase=allPhrases().find(p=>p.id===id);if(!phrase)return;recent=[id,...recent.filter(x=>x!==id)].slice(0,12);saveStorage(STORAGE_KEYS.recent,recent);renderHomeRecent();renderRecent();if(shouldSpeak&&prefs.autoSpeak)speak(phraseText(phrase));}
function toggleFavourite(id){favourites=favourites.includes(id)?favourites.filter(x=>x!==id):[...favourites,id];saveStorage(STORAGE_KEYS.favourites,favourites);updateCounts();renderBoard();renderFavourites();if(currentPage==="home")renderHomeRecent();showToast(favourites.includes(id)?"Added to favourites":"Removed from favourites");}
function addToSentence(id){const phrase=allPhrases().find(p=>p.id===id);if(!phrase)return;selectedSentence.push(id);renderSentence();showToast(UI[language].add);}
function renderSentence(){const output=document.getElementById("sentenceOutput");const words=selectedSentence.map(id=>allPhrases().find(p=>p.id===id)).filter(Boolean).map(p=>phraseText(p));output.textContent=words.length?words.join(" "):UI[language].prompt;output.classList.toggle("has-text",words.length>0);document.getElementById("sentenceCount").textContent=words.length===1?"1 phrase":`${words.length} phrases`;document.getElementById("speakSentenceButton").disabled=!words.length;document.getElementById("clearSentenceButton").disabled=!words.length;document.getElementById("clearSentenceTextButton").disabled=!words.length;}
function renderCard(phrase){const text=phraseText(phrase);const favourite=favourites.includes(phrase.id);return `<article class="phrase-card" style="--card-tint:${phrase.tint||"#f1f6f8"}"><button class="favourite-toggle ${favourite?"is-favourite":""}" data-favourite="${escapeHTML(phrase.id)}" aria-label="${favourite?"Remove from":"Add to"} favourites" title="${favourite?"Remove from":"Add to"} favourites">${favourite?"♥":"♡"}</button><div class="phrase-emoji" aria-hidden="true">${phrase.emoji||"💬"}</div><div class="phrase-title">${escapeHTML(text)}</div><div class="phrase-subtitle">${language!=="en-US"?escapeHTML(phrase.en||""):" "}</div><div class="phrase-card-actions"><button class="card-speak" data-speak="${escapeHTML(phrase.id)}" aria-label="Speak ${escapeHTML(text)}">🔊 <span>${UI[language].speak}</span></button><button class="card-add" data-add="${escapeHTML(phrase.id)}" aria-label="Add ${escapeHTML(text)} to sentence" title="Add to sentence">＋</button></div></article>`;}
function renderBoard(){const grid=document.getElementById("phraseGrid");if(!grid)return;const search=(document.getElementById("phraseSearch")?.value||"").trim().toLowerCase();const category=document.getElementById("categoryFilter")?.value||"all";const filtered=allPhrases().filter(p=>(category==="all"||p.category===category)&&(!search||[p.en,p.ta,p.hi].filter(Boolean).join(" ").toLowerCase().includes(search)));grid.innerHTML=filtered.map(renderCard).join("");document.getElementById("boardResultCount").textContent=`${filtered.length} ${filtered.length===1?"message":"messages"}`;document.getElementById("noResults").classList.toggle("hidden",filtered.length>0);document.getElementById("phraseTotal").textContent=allPhrases().length;applyDisplayPrefs();}
function renderFavourites(){const grid=document.getElementById("favouritesGrid");if(!grid)return;const items=favourites.map(id=>allPhrases().find(p=>p.id===id)).filter(Boolean);grid.innerHTML=items.map(renderCard).join("");document.getElementById("favouritesEmpty").classList.toggle("hidden",items.length>0);grid.classList.toggle("hidden",items.length===0);applyDisplayPrefs();}
function renderRecent(){const grid=document.getElementById("recentGrid");if(!grid)return;const items=recent.map(id=>allPhrases().find(p=>p.id===id)).filter(Boolean);grid.innerHTML=items.map(renderCard).join("");document.getElementById("recentEmpty").classList.toggle("hidden",items.length>0);grid.classList.toggle("hidden",items.length===0);applyDisplayPrefs();}
function renderHomeRecent(){const wrap=document.getElementById("homeRecent");const items=recent.slice(0,4).map(id=>allPhrases().find(p=>p.id===id)).filter(Boolean);wrap.innerHTML=items.length?items.map(p=>`<div class="mini-recent-item"><span>${p.emoji||"💬"}</span><span>${escapeHTML(phraseText(p))}</span><button data-speak="${escapeHTML(p.id)}">Speak</button></div>`).join(""):"Your recent messages will appear here after you use them.";wrap.classList.toggle("empty-state",!items.length);}
function updateCounts(){document.getElementById("favouriteCount").textContent=favourites.length;document.getElementById("statFavourites").textContent=favourites.length;document.getElementById("statRecent").textContent=recent.length;document.getElementById("phraseTotal").textContent=allPhrases().length;}
function applyDisplayPrefs(){document.body.classList.toggle("hide-phrase-text",!prefs.showText);document.body.classList.toggle("reduce-motion",!!prefs.reduceMotion);}
function resetSentence(){selectedSentence=[];renderSentence();}
function onCardAction(event){const fav=event.target.closest("[data-favourite]");if(fav){toggleFavourite(fav.dataset.favourite);return;}const add=event.target.closest("[data-add]");if(add){addToSentence(add.dataset.add);return;}const speakButton=event.target.closest("[data-speak]");if(speakButton){usePhrase(speakButton.dataset.speak,true);return;}}
function openAddDialog(){const dialog=document.getElementById("phraseDialog");if(typeof dialog.showModal==="function")dialog.showModal();else showToast("Please use a modern browser to add custom phrases.");}
function addCustomPhrase(event){event.preventDefault();const en=document.getElementById("newPhraseText").value.trim();if(!en)return;const id="custom-"+Date.now().toString(36);customPhrases.push({id,category:document.getElementById("newPhraseCategory").value,emoji:"💬",tint:"#eaf5f4",en,ta:document.getElementById("newPhraseTamil").value.trim(),hi:document.getElementById("newPhraseHindi").value.trim()});saveStorage(STORAGE_KEYS.custom,customPhrases);document.getElementById("phraseForm").reset();document.getElementById("phraseDialog").close();renderBoard();updateCounts();showToast("Your phrase has been added");}
function applyPrefsToControls(){document.getElementById("speechRate").value=prefs.rate;document.getElementById("speechRateValue").textContent=Number(prefs.rate).toFixed(2)+"×";document.getElementById("autoSpeakToggle").checked=!!prefs.autoSpeak;document.getElementById("showTextToggle").checked=!!prefs.showText;document.getElementById("reduceMotionToggle").checked=!!prefs.reduceMotion;applyDisplayPrefs();}
function savePrefs(){saveStorage(STORAGE_KEYS.prefs,prefs);applyPrefsToControls();}
document.addEventListener("click",event=>{const nav=event.target.closest("[data-page]");if(nav){event.preventDefault();setPage(nav.dataset.page);return;}const category=event.target.closest("[data-category]");if(category){setPage("communicate");document.getElementById("categoryFilter").value=category.dataset.category;document.getElementById("phraseSearch").value="";renderBoard();return;}if(event.target.closest("#phraseGrid")||event.target.closest("#favouritesGrid")||event.target.closest("#recentGrid")||event.target.closest("#homeRecent"))onCardAction(event);});
document.getElementById("language").addEventListener("change",event=>changeLanguage(event.target.value));
document.getElementById("settingsLanguage").addEventListener("change",event=>changeLanguage(event.target.value));
document.getElementById("phraseSearch").addEventListener("input",renderBoard);
document.getElementById("categoryFilter").addEventListener("change",renderBoard);
document.getElementById("addPhraseButton").addEventListener("click",openAddDialog);
document.getElementById("cancelPhraseButton").addEventListener("click",()=>document.getElementById("phraseDialog").close());
document.getElementById("phraseForm").addEventListener("submit",addCustomPhrase);
document.getElementById("clearSentenceButton").addEventListener("click",resetSentence);
document.getElementById("clearSentenceTextButton").addEventListener("click",resetSentence);
document.getElementById("speakSentenceButton").addEventListener("click",()=>{const text=selectedSentence.map(id=>allPhrases().find(p=>p.id===id)).filter(Boolean).map(p=>phraseText(p)).join(" ");speak(text);});
document.getElementById("clearRecentButton").addEventListener("click",()=>{if(!recent.length){showToast("Your history is already empty");return;}recent=[];saveStorage(STORAGE_KEYS.recent,recent);renderRecent();renderHomeRecent();updateCounts();showToast("Recent history cleared");});
document.getElementById("speechRate").addEventListener("input",event=>{prefs.rate=Number(event.target.value);document.getElementById("speechRateValue").textContent=prefs.rate.toFixed(2)+"×";saveStorage(STORAGE_KEYS.prefs,prefs);});
document.getElementById("autoSpeakToggle").addEventListener("change",event=>{prefs.autoSpeak=event.target.checked;savePrefs();});
document.getElementById("showTextToggle").addEventListener("change",event=>{prefs.showText=event.target.checked;savePrefs();renderBoard();renderFavourites();renderRecent();});
document.getElementById("reduceMotionToggle").addEventListener("change",event=>{prefs.reduceMotion=event.target.checked;savePrefs();});
document.getElementById("testSpeechButton").addEventListener("click",()=>speak(language==="ta-IN"?"வணக்கம். நான் பேசத் தயாராக இருக்கிறேன்.":language==="hi-IN"?"नमस्ते। मैं बोलने के लिए तैयार हूँ।":"Hello. I am ready to communicate."));
document.getElementById("resetPreferencesButton").addEventListener("click",()=>{prefs={rate:0.85,autoSpeak:true,showText:true,reduceMotion:false};savePrefs();changeLanguage("en-US");showToast("Preferences reset");});
document.getElementById("menuButton").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("mobile-open"));
document.addEventListener("keydown",event=>{if(event.key==="/"&&!/input|textarea/i.test(document.activeElement.tagName)){event.preventDefault();setPage("communicate");document.getElementById("phraseSearch").focus();}if(event.key==="Escape")document.getElementById("sidebar").classList.remove("mobile-open");});
if("speechSynthesis"in window){getVoices();window.speechSynthesis.onvoiceschanged=getVoices;}
applyPrefsToControls();changeLanguage("en-US");renderHomeRecent();renderSentence();updateCounts();
