import os, html
OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOK = "https://www.woofland.co.nz/booking-pricing"
LOGIN = "https://www.woofland.co.nz/client-login"
GMAPS = "https://www.google.com/maps/search/?api=1&query=Woofland+Dog+Daycare+%26+Hotel&query_place_id=ChIJA3HbypQ_DW0RkW0YpzXgdvQ"
STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.8l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.9l-6.4 3.5 1.4-7.1-5.3-5 7.2-.9z"/></svg>'
S5 = STAR * 5
M = lambda k: "/media/" + k

NAV = [("/dog-daycare", "Dog Daycare"), ("/dog-hotel", "Dog Hotel"), ("/farm-adventure", "Farm Adventure"), ("/about", "Our Story")]

def btn(label, href=BOOK, cls=""):
    return f'<a class="btn mag {cls}" href="{href}">{label} <i></i></a>'

def head(title, desc, path):
    return f'''<!doctype html>
<html lang="en-NZ">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#0a0a0a">
<script>try{{var t=localStorage.getItem("wf-theme");if(t==="light")document.documentElement.dataset.theme="light"}}catch(e){{}}</script>
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<link rel="icon" type="image/webp" href="/img/logo.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Space+Grotesk:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
'''

def chrome(path):
    links = "".join(f'<a href="{h}"{" class=\"cur-page\"" if h == path else ""}>{t}</a>' for h, t in NAV)
    return f'''<header class="nav" id="nav">
  <a class="brand" href="/" aria-label="Woofland home"><img src="/img/logo.webp" alt="" width="48" height="38"><span>Woofland</span></a>
  <nav class="navpill" aria-label="Main"><span class="blob"></span>{links}<a href="#contact">Contact</a></nav>
  <div class="right"><button class="tgl" id="tgl" aria-label="Switch between dark and light" title="Dark / light"><i></i></button><a class="login" href="{LOGIN}">Client Login</a>{btn("Book Free Trial")}
    <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i></button></div>
</header>
<div class="menu" id="menu">
  <nav aria-label="Menu">
    <a href="/"><small>01</small>Home</a>
    <a href="/dog-daycare"><small>02</small>Dog Daycare</a>
    <a href="/dog-hotel"><small>03</small>Dog Hotel</a>
    <a href="/farm-adventure"><small>04</small>Farm Adventure</a>
    <a href="/dog-osteopathy"><small>05</small>Osteopathy &amp; Mobility</a>
    <a href="/about"><small>06</small>Our Story</a>
  </nav>
  <div class="mfoot"><div class="row">{btn("Book Free Trial")}<a class="btn line" href="{LOGIN}">Client Login <i></i></a></div>
  <p>0800 147 369 &middot; info@woofland.co.nz<br>137 Wairau Road, Wairau Valley, Auckland</p></div>
</div>
<div class="runner" id="runner" aria-hidden="true"><div class="trk"><i id="rfill"></i></div>
  <div class="dg" id="rdog"><div class="rspr" id="rspr"></div><img data-p="sleep" id="rslp" src="/img/d6.webp" alt="" style="opacity:0"></div></div>
'''

def cta(h="Your dog's first day is <span class=\"it\">on us.</span>", p="Every dog starts with a free trial and assessment, so we can meet them properly and you can see Woofland for yourself."):
    return f'''<section class="cta" id="contact" aria-label="Book">
  <div class="word display" id="ctaWord" aria-hidden="true">Woofland Woofland</div>
  <div class="wrap"><div class="grid">
    <div><h2 class="display">{h}</h2><p>{p}</p>
      <div class="row">{btn("Book Free Trial", BOOK, "dark")}<a class="btn line mag" href="{LOGIN}">Client Login <i></i></a></div></div>
    <div class="jump"><img src="/img/d7.webp" alt="" loading="lazy"></div>
  </div></div>
</section>'''

FOOT = f'''<footer class="foot">
  <div class="wrap">
    <div class="top">
      <div class="brandf"><img src="/img/logo.webp" alt="Woofland"><p>Where dogs are dogs.</p>
        <ul><li>Dog Daycare &amp; Hotel</li><li>North Shore, Auckland</li></ul></div>
      <div><h5>Services</h5><ul><li><a href="/dog-daycare">Dog Daycare</a></li><li><a href="/dog-hotel">Dog Hotel</a></li><li><a href="/farm-adventure">Farm Adventure</a></li><li><a href="/dog-osteopathy">Osteopathy &amp; Mobility</a></li><li><a href="/dog-daycare#transport">Woof Van transport</a></li></ul></div>
      <div><h5>Woofland</h5><ul><li><a href="/about">Our story</a></li><li><a href="{BOOK}">Booking &amp; pricing</a></li><li><a href="{LOGIN}">Client login</a></li><li><a href="{GMAPS}">Google reviews</a></li><li><a href="https://www.instagram.com/wooflandnz/">Instagram @wooflandnz</a></li></ul></div>
      <div><h5>Visit</h5><ul><li class="sel">137 Wairau Road, Wairau Valley, Auckland 0627</li><li class="sel">0800 147 369</li><li class="sel">info@woofland.co.nz</li><li>Monday to Friday, 7:00 am to 7:00 pm</li><li>Hotel drop-off and pick-up by arrangement</li></ul></div>
    </div>
    <div class="areas"><b>Woof Van pick-up areas</b><span>North Shore</span><span>Dairy Flat</span><span>Riverhead</span><span>Kumeu</span><span>Coatesville</span><span>Hobsonville</span><span>Westgate</span><span>Massey</span><span>Ponsonby</span><span>Grey Lynn</span></div>
    <p class="areasnote">Silverdale, Auckland CBD or any surrounding suburb? <a href="#contact">Contact us</a>, we might be able to help.</p>
  </div>
  <div class="gw"><img class="fdog" src="/img/d3.webp" alt="" loading="lazy"><div class="giant" aria-hidden="true">Woofland</div></div>
  <div class="legal"><div class="wrap" style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:.6rem 2rem;width:100%">
    <span>&copy; 2026 Woofland Dog Daycare &amp; Hotel. PackPro member 2026.</span>
    <span><a href="https://www.woofland.co.nz/terms-conditions">Terms &amp; Conditions</a> &nbsp;&middot;&nbsp; <a href="https://www.woofland.co.nz/privacy-policy">Privacy Policy</a></span></div></div>
</footer>
<script src="/assets/site.js"></script>
</body></html>'''

def faq(items, cats=None):
    chips = ""
    if cats:
        chips = '<div class="chips">' + "".join(f'<button data-cat="{c[0]}"{" class=\"on\"" if i == 0 else ""}>{c[1]}</button>' for i, c in enumerate(cats)) + "</div>"
    qs = "".join(f'<div class="qa{" open" if i == 0 else ""}" data-cat="{c}"><button aria-expanded="{"true" if i == 0 else "false"}"><small>{i+1:02d}</small><span>{q}</span><i></i></button><div class="a"><div><p>{a}</p></div></div></div>' for i, (c, q, a) in enumerate(items))
    return f'''<section class="sec faq" aria-label="Questions"><div class="wrap grid">
  <div class="left"><div class="eyebrow">Good to know</div><h2 class="display h2" style="margin-top:1rem">Questions, <span class="it">answered.</span></h2>{chips}</div>
  <div>{qs}</div></div></section>'''

def phero(crumb, eyebrow, h1, lead, img, alt, word, extra=""):
    return f'''<section class="phero" data-in>
  <div class="bgw display" aria-hidden="true">{word} {word}</div>
  <div class="wrap"><div class="grid">
    <div><div class="crumb"><a href="/">Woofland</a> / {crumb}</div><div class="eyebrow" data-fade>{eyebrow}</div>
      <h1 class="display">{h1}</h1><p class="lead" data-fade data-d="1">{lead}</p>
      <div class="row" data-fade data-d="2">{btn("Book Free Trial")}{extra}</div></div>
    <figure class="frame clip" data-parbox style="margin:0">{img_tag(img, alt, eager=True)}</figure>
  </div></div></section>'''

def img_tag(key, alt, eager=False):
    src = key if key.startswith("/") else M(key)
    return f'<img data-par="14" src="{src}" alt="{html.escape(alt)}"{"" if eager else " loading=\"lazy\""}>'

def page(name, title, desc, body):
    path = "/" if name == "index" else "/" + name
    with open(os.path.join(OUT, name + ".html"), "w") as f:
        f.write(head(title, desc, path) + chrome(path) + "<main>" + body + "</main>" + FOOT)

# ---------------- HOME ----------------
HOME_FAQ = [
 ("general", "Are all dog breeds welcome at Woofland?", "Absolutely. We welcome all breeds, as long as they are friendly, social and up to date with their vaccinations. Each dog is assessed before joining group play."),
 ("general", "What are your opening hours?", "Our standard hours are 7:00 am to 7:00 pm, Monday to Friday. Hotel drop-offs and pick-ups are available by arrangement."),
 ("general", "How do you handle dogs with different personalities?", "We group dogs by energy level and temperament, so everyone enjoys a safe and positive experience."),
 ("hotel", "Do you provide overnight care?", "Yes. We offer both home-like stays and private pods. In the Pack Lounge, a caregiver stays and sleeps with the dogs overnight."),
 ("hotel", "What should I bring for my dog's stay?", "Please bring their bed, food, favourite toy and any necessary medication, so they feel comfortable and at home."),
 ("farm", "Can my dog join the Farm Adventure from Wairau?", "Yes. Dogs attending daycare at Wairau travel to the farm in the Woof Van when Farm Adventure is booked in advance."),
 ("health", "Which vaccinations does my dog need?", "Your dog must be up to date with core vaccinations, including kennel cough, to attend Woofland."),
 ("health", "Is Woofland fully supervised?", "Yes. Trained team members are always on hand to monitor play, keep everyone safe and offer comfort."),
]
G_REVIEWS = [
 ("Woofland is the first daycare I've ever put my dog into and hands down the best one out there.", "My dog Honey hears the word daycare and is immediately at the front door itching to go."),
 ("We had a smooth transition for our big pup who has never been to daycare.", "Now, he gets so excited to go and doesn't even look back."),
 ("We instantly felt at ease and knew our dogs would be in good hands.", "The staff are lovely and genuinely take great care of the dogs."),
 ("Every time Piki comes home he is exhausted (in the best way).", "He's started to socialise with other dogs which makes us so happy. I cannot recommend Woofland enough."),
 ("It's clear how much they genuinely care about the dogs.", "We always feel that Kai is loved and well looked after."),
]
C_REVIEWS = [
 ("Dan", "Mylo's owner", "Outstanding service for our precious little dog Mylo. Loved the regular photos on social media and Mylo had such a wonderful time getting to know the people and other dogs."),
 ("Alicia", "Meela's owner", "Our doggies are always so excited to get picked up for daycare! The staff are so caring and communicative, and I love seeing the videos of their adventures each day."),
 ("Nic", "Beau's owner", "Awesome all day care, our boy comes home happily exhausted after a full day of play. Great reliable pickup and drop off service and really good communication."),
]
def g_card(a, b, hl):
    return f'<article class="rv{" hl" if hl else ""}"><div class="st">{S5}</div><q>{a}{"" if hl else " " + b}</q><div class="by"><i>G</i><span>Google review</span></div></article>'
def c_card(n, o, t):
    return f'<article class="rv"><div class="st">{S5}</div><q>{t}</q><div class="by"><i>{n[0]}</i><span><b style="color:var(--cream)">{n}</b> &middot; {o}</span></div></article>'
cols = [
  g_card(*G_REVIEWS[0], True) + c_card(*C_REVIEWS[0]) + g_card(*G_REVIEWS[3], False),
  g_card(*G_REVIEWS[1], False) + g_card(*G_REVIEWS[4], True) + c_card(*C_REVIEWS[1]) + g_card(*G_REVIEWS[0], False),
  c_card(*C_REVIEWS[2]) + g_card(*G_REVIEWS[2], True) + g_card(*G_REVIEWS[4], False) + g_card(*G_REVIEWS[1], True),
]
WALL = "".join(f'<div class="col">{c}</div>' for c in cols)
STRIP = "".join(f'<figure><img src="{M(k)}" alt="A Woofland dog at daycare" loading="lazy"></figure>' for k in ["ig5", "ig2", "ig11", "ig0", "ig12", "ig6", "ig3", "ig10", "ig8"])

HOME_CTA = cta('Ready to treat your dog to a place <span class="it">they\'ll love?</span>', "Book now and let the fun begin at Woofland, where dogs are dogs.")
home = f'''
<div class="loader" id="loader"><div class="in2"><img src="/img/logo.webp" alt=""><b id="lcount">0</b><div class="lbar"><i id="lbar"></i></div></div></div>
<section class="hero" id="hero" aria-label="Woofland" data-src="/img/hero2.webp,/img/hero2.webp,/img/hero3.webp" data-fy="0.5,0.5,0.5">
  <div class="hstage">
    <div class="hframe" id="hframe"><div class="hfall" id="hfall"></div><canvas id="gl" aria-hidden="true"></canvas><div class="hshade"></div></div>
    <div class="hill" id="hill" aria-hidden="true"><div class="hsun"></div><div class="hring"></div></div>
    <div class="hstory" id="hstory" aria-hidden="true"><div class="hground"></div>
      <div class="htrack" id="htrack">
        <div class="hsc" id="hE"><span class="hp hm"><i class="hms" style="background-position-y:0%"></i></span><p>They followed us.</p></div>
        <div class="hsc" id="hM"><span class="hp hm"><i class="hms" style="background-position-y:50%"></i></span><p>They walked with us.</p></div>
        <div class="hsc" id="hT"><span class="hp hm"><i class="hms" style="background-position-y:100%"></i></span><p>They played with us.</p></div>
        <div class="hsc" id="hC"><span class="hcouch"><img src="/media/couch" alt=""></span><p>Now they are family.</p></div>
        <svg class="hbone" id="hbone" viewBox="0 0 40 16" aria-hidden="true"><path d="M8 5h24a4 4 0 1 1 3 3 4 4 0 1 1-3 3H8a4 4 0 1 1-3-3 4 4 0 1 1 3-3z" fill="#fbeedd"/></svg>
        <i class="hball" id="hball"></i>
        <svg class="hleash" aria-hidden="true"><g id="hleashg"><path id="hleashp" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle id="hclip" r="5" fill="#fbeedd"/></g></svg>
        <div class="hgrass"></div><div class="hdog" id="hdog"><div class="hspr" id="hspr"></div><img class="hslp" id="hslp" src="/img/d6.webp" alt=""></div>
      </div>
    </div>
    <button class="skip" id="skip" type="button" aria-label="Skip ahead, past the intro story"><span class="sk-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2 7.5 7.5 2-7.5 2-2 7.5-2-7.5-7.5-2 7.5-2z" fill="none" stroke="#0a0a0a" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="12" r="1.6" fill="#0a0a0a"/></svg></span><span class="sk-tx"><small>In a hurry?</small>Skip Ahead</span><span class="sk-ar"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>
    <div class="hslide" data-s="0"><div class="wrap">
      <div class="eyebrow" data-fade>Premium Dog Daycare and Hotel &middot; North Shore, Auckland</div>
      <h1 class="display"><span class="ln"><span>Where dogs</span></span><span class="ln"><span>are <span class="it">dogs.</span></span></span></h1>
      <p class="lead" data-fade data-d="1">Spacious, supervised dog care where dogs are free to be dogs.</p>
      <div class="row" data-fade data-d="2">{btn("Book Free Trial")}<a class="btn line mag" href="#services">Explore Woofland <i></i></a></div>
    </div></div>
    <div class="hslide" data-s="1"><div class="wrap">
      <div class="eyebrow" data-fade>Dog Daycare</div>
      <h2 class="display"><span class="ln"><span>Play</span></span><span class="ln"><span><span class="it">hard.</span></span></span></h2>
      <p class="lead" data-fade data-d="1">Structured activities, positive social play and small playgroups, matched by energy level and temperament.</p>
    </div></div>
    <div class="hslide" data-s="2"><div class="wrap">
      <div class="eyebrow" data-fade>Rest time, every day</div>
      <h2 class="display"><span class="ln"><span>Rest</span></span><span class="ln"><span><span class="it">harder.</span></span></span></h2>
      <p class="lead" data-fade data-d="1">Dogs come home happily exhausted. Rest is built into every day, with a caring team always close by.</p>
    </div></div>
    <div class="hmeta" aria-hidden="true"><b id="hnum">01</b><div class="dots"><i class="on"></i><i></i><i></i></div><span class="hint">Scroll</span></div>
  </div>
</section>

<section class="mq" aria-label="Our services"><div class="rowm" id="mq1" aria-hidden="true"></div>
  <div class="wrap"><div class="also"><b>Also at Woofland</b><span>Farm Adventure</span><span>Osteopathy &amp; Mobility</span><span>Woof Van Pick-up &amp; Drop-off</span></div></div></section>

<section class="mani" aria-label="About Woofland"><div class="wrap">
  <div class="grid">
    <div class="side"><div class="eyebrow">Our philosophy</div><img id="maniDog" src="/img/d1.webp" alt=""></div>
    <p class="big2" id="storyq">Care for dogs who need more than a backyard. A purpose-built facility with clean, secure and fully supervised spaces designed for comfort, play and socialisation, where every dog feels relaxed, safe and happy.</p>
  </div>
  <div class="foot2"><span></span><div><p>At Woofland Wairau we bring the same trusted care and philosophy of "where dogs are dogs" to a modern urban setting, with dedicated indoor and outdoor areas, small playgroups and a caring team.</p><a class="tlink" href="/about">Our story</a></div></div>
</div></section>

<section class="reel" id="reel" aria-label="Services"><span id="services" style="position:absolute;top:0"></span>
  <div class="rstage">
    <div class="rhead"><div class="wrap"><h2 class="display">Purpose-built care.</h2><span class="cnt"><span id="rcnt">01</span> / 03</span></div><span class="swipehint">Scroll or swipe <i>&rarr;</i></span></div>
    <div class="rtrack" id="rtrack">
      <article class="panel">
        <button class="ph flip" type="button" aria-pressed="false" aria-label="Dog Daycare. Flip the card to see the real daycare floor"><span class="fin">
          <span class="ff front"><span class="fsun"></span><img class="fart" src="/img/d7.webp" alt=""><span class="fhint"><i></i>Tap to see the real thing</span></span>
          <span class="ff back"><img class="pic" src="/img/space.webp" alt="A Woofland team member with dogs on the daycare floor"><span class="fhint"><i></i>Tap to flip back</span></span></span></button>
        <div class="txt"><h3 class="display">Dog <span class="it">Daycare</span></h3><p class="sub">Days designed around your dog.</p>
          <p>Designed for movement, balance and positive social play. Structured activities, rest time and supervised interaction in a safe, calm, cage-free environment.</p>
          <div class="tags"><span>From $47 a day</span><span>7am to 7pm, Mon to Fri</span><span>Small playgroups</span></div>
          <div>{btn("Explore Daycare", "/dog-daycare")}</div></div>
      </article>
      <article class="panel">
        <button class="ph flip" type="button" aria-pressed="false" aria-label="Dog Hotel. Flip the card to see the Pack Lounge"><span class="fin">
          <span class="ff front night2"><span class="fsun"></span><img class="fart wide" src="/img/d6.webp" alt=""><span class="fhint"><i></i>Tap to see the real thing</span></span>
          <span class="ff back"><img class="pic" src="/img/lounge.webp" alt="The Pack Lounge at the Woofland Dog Hotel"><span class="fhint"><i></i>Tap to flip back</span></span></span></button>
        <div class="txt"><h3 class="display">Dog <span class="it">Hotel</span></h3><p class="sub">Someone sleeps beside them, every night.</p>
          <p>Home-like overnight stays with plenty of human interaction. In the Pack Lounge a caregiver stays and sleeps with the dogs, with private pods for dogs who enjoy their own space.</p>
          <div class="tags"><span>From $63 a night</span><span>Staff on site day and night</span><span>Cage-free</span></div>
          <div>{btn("Explore the Hotel", "/dog-hotel")}</div></div>
      </article>
      <article class="panel alsop">
        <div class="eyebrow">Also at Woofland</div>
        <h3 class="display">A little <span class="it">extra.</span></h3>
        <div class="g">
          <a class="mini" href="/farm-adventure"><img src="/img/d3.webp" alt="" loading="lazy"><div><h4>Farm Adventure</h4><p>At least two hours with paws on a real farm, added to a daycare day.</p></div></a>
          <a class="mini" href="/dog-osteopathy"><img src="/img/d4.webp" alt="" loading="lazy"><div><h4>Osteopathy &amp; Mobility</h4><p>Gentle support for movement and comfort with a visiting practitioner.</p></div></a>
          <a class="mini" href="/dog-daycare#transport"><img src="/img/d8.webp" alt="" loading="lazy"><div><h4>Woof Van</h4><p>Pick-up and drop-off across the North Shore and beyond.</p></div></a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="night" aria-label="Overnight care" data-parbox>
  <div class="bg" data-par="10"><img src="/img/suite.webp" alt="Dogs resting in a Woofland hotel room" loading="lazy"></div><div class="stars"></div>
  <div class="wrap c" data-in><div class="eyebrow" data-fade>The Woofland difference</div>
    <div class="jlh" data-fade>Just like home.</div>
    <h2>While you sleep, someone sleeps <em class="it" style="font-style:normal">beside them.</em></h2>
    <div class="cols"><p class="lead" data-fade data-d="1">Most kennels go dark at closing time. At Woofland Dog Hotel a team member stays the night in the Pack Lounge, so it feels just like home, with a familiar human always within reach.</p>
      <div class="time" data-fade data-d="2">Present, day and night.</div></div></div>
</section>

<section class="sec" id="hotel" aria-label="Dog Hotel rooms"><div class="wrap">
  <div class="svc-head" data-in><div><div class="eyebrow">Dog Hotel by Woofland</div><h2 class="display h2" style="margin-top:1rem"><span class="ln"><span>Three ways</span></span><span class="ln"><span>to <span class="it">stay.</span></span></span></h2></div>
    <p data-fade>Different dogs rest differently. We match the room and routine to temperament, social comfort and wellbeing.</p></div>
  <a class="room" data-room="0" href="/dog-hotel"><span class="n">01</span><h3 class="display">Pack Lounge</h3><p>A home-style lounge for social dogs, with a caregiver sleeping in the room overnight.</p><span class="pr">$80&ndash;$90<small>per night</small></span><span class="inl"><img src="/img/lounge.webp" alt="Pack Lounge" loading="lazy"></span></a>
  <a class="room" data-room="1" href="/dog-hotel"><span class="n">02</span><h3 class="display">Paw Pod</h3><p>A private enclosed pod for dogs who prefer their own calm sleeping space.</p><span class="pr">$63&ndash;$70<small>per night</small></span><span class="inl"><img src="/img/pod.webp" alt="Paw Pod" loading="lazy"></span></a>
  <a class="room" data-room="2" href="/dog-hotel"><span class="n">03</span><h3 class="display">Alpha Suite</h3><p>A spacious private suite for dogs from the same family.</p><span class="pr">$160&ndash;$180<small>per night</small></span><span class="inl"><img src="/img/suite.webp" alt="Alpha Suite" loading="lazy"></span></a>
</div></section>
<div class="rfloat" id="rfloat" aria-hidden="true"><img src="/img/lounge.webp" alt=""><img src="/img/pod.webp" alt=""><img src="/img/suite.webp" alt=""></div>

<section class="sec" aria-label="Why Woofland" style="padding-top:0"><div class="wrap">
  <div class="svc-head"><div><div class="eyebrow">Why owners trust us</div><h2 class="display h2" style="margin-top:1rem">Trusted by the <span class="it">North Shore.</span></h2></div>
    <a class="tlink" href="{GMAPS}">Read our Google reviews</a></div>
  <div class="bento">
    <div class="cell c-rate" data-in><div><div class="k">Google rating</div></div>
      <div><div class="n"><span data-count="5.0" data-dec="1">5.0</span></div><div class="stars5" style="margin:1.2rem 0 .8rem">{S5}</div>
      <p style="font-size:1.05rem;color:var(--cream)">From <b><span data-count="123">123</span> Google reviews</b> by local dog owners.</p></div></div>
    <div class="cell c-a"><div class="k">Vet-founded</div><div><h3>Care led by experience.</h3><p>Founder Ryan holds a veterinary degree and has spent over five years in New Zealand's animal health industry.</p></div></div>
    <div class="cell c-b"><div class="k">No cages</div><div><h3>Cage-free. Crate-free.</h3><p>Purpose-built spaces, never confinement.</p></div><img class="dogi" src="/img/d10.webp" alt="" loading="lazy"></div>
    <div class="cell c-c"><div class="k">Assessed first</div><div><h3>Every dog is met properly.</h3><p>A free trial before any dog joins group play.</p></div></div>
    <div class="cell c-d" style="flex-direction:row;align-items:center;justify-content:flex-start"><img class="badge" src="/img/packpro26.webp" alt="PackPro member 2026" loading="lazy"><div><div class="k">PackPro member 2026</div><h3 style="margin-top:.5rem">Part of the dog daycare professionals network.</h3></div></div>
  </div>
</div></section>

<section class="sec rev" id="reviews" aria-label="Reviews"><div class="ghost5" aria-hidden="true">5.0</div><div class="wrap">
  <div class="head"><div><div class="eyebrow">In their words</div><h2 class="display h2" style="margin-top:1rem">Loved by dogs. <span class="it">Reviewed by humans.</span></h2></div>
    <a class="btn line mag" href="{GMAPS}">All 123 Google reviews <i></i></a></div>
  <div class="wall">{WALL}</div>
</div></section>

<section class="sec" id="start" aria-label="How to join"><div class="wrap">
  <h2 class="display h2">Three steps to join <span class="it">the pack.</span></h2>
  <p class="lead" style="margin-top:1.2rem">Every dog starts the same way, so every dog here is safe and settled.</p>
  <ol class="steps3">
    <li class="st3"><img src="/img/d0.webp" alt="" loading="lazy"><b>1</b><h3>Come for a free assessment</h3><p>Bring your dog in for a free trial visit. We meet them, show them around and check they are happy with us.</p>{btn("Book free assessment")}</li>
    <li class="st3"><img src="/img/d1.webp" alt="" loading="lazy"><b>2</b><h3>Register your dog</h3><p>After the assessment, fill in one short form with your dog's details. It takes a few minutes.</p><a class="btn line mag" href="{LOGIN}">Register your dog <i></i></a></li>
    <li class="st3"><img src="/img/d3.webp" alt="" loading="lazy"><b>3</b><h3>Book daycare or a hotel stay</h3><p>Once registered, book the days and nights you need online, any time.</p><a class="btn line mag" href="{LOGIN}">Book a day or a stay <i></i></a></li>
  </ol>
</div></section>
{faq(HOME_FAQ, [("all","All"),("general","General"),("hotel","Hotel"),("farm","Farm"),("health","Health")])}
{HOME_CTA}
'''
page("index", "Woofland | Dog Daycare & Dog Hotel, North Shore Auckland", "Premium cage-free dog daycare and hotel on Auckland's North Shore. Supervised play by day, and a caregiver who sleeps beside the dogs at night.", home)

# ---------------- DAYCARE ----------------
daycare = phero("Dog Daycare", "Dog Daycare &middot; North Shore, Auckland", '<span class="ln"><span>Days designed</span></span><span class="ln"><span>around <span class="it">your dog.</span></span></span>',
  "Calm, supervised, cage-free daycare designed for comfort and wellbeing. Every day balances play, enrichment and proper rest.", "/img/hero1.webp", "Dogs in the Woofland daycare space", "Daycare",
  '<a class="btn line mag" href="#pricing">See pricing <i></i></a>') + f'''
<section class="sec" style="padding-top:clamp(2rem,5vw,4rem)"><div class="wrap">
  <div class="eyebrow">What sets us apart</div><h2 class="display h2" style="margin-top:1rem">Guided by behaviour, <span class="it">not a timetable.</span></h2>
  <div class="feat">
    <div class="cell"><div class="k">01</div><div><h3>Care led by experience</h3><p>Every decision is guided by dog behaviour, wellbeing and hands-on experience, from group dynamics to rest times and supervision.</p></div></div>
    <div class="cell"><div class="k">02</div><div><h3>Tailored enjoyment</h3><p>From spirited play to relaxed lounging, each day is shaped around your dog's preferences and needs.</p></div></div>
    <div class="cell"><div class="k">03</div><div><h3>Dedicated spaces</h3><p>Spaces matched to behaviour and energy levels, with no cages or crates, and experienced handlers supervising throughout.</p></div><img class="dogi" src="/img/d7.webp" alt="" loading="lazy" style="width:96px"></div>
  </div>
</div></section>
<section class="sec" id="pricing" style="padding-top:0"><div class="wrap">
  <div class="eyebrow">Daycare options</div><h2 class="display h2" style="margin-top:1rem">Simple, <span class="it">flexible</span> pricing.</h2>
  <div class="prices">
    <div class="price"><div class="k">One-off</div><h3>Single day</h3><div class="amt">$55<small>per day</small></div><p>A full day of supervised play, socialising and rest.</p></div>
    <div class="price"><div class="k">5 sessions</div><h3>5-session pack</h3><div class="amt">$52<small>per day</small></div><p>$260 in total. Valid for 90 days. $60 per day including transport.</p></div>
    <div class="price top"><div class="k">Most popular</div><h3>10-session pack</h3><div class="amt">$47<small>per day</small></div><p>$470 in total. Use within 180 days. $55 per day including transport.</p></div>
    <div class="price"><div class="k">Regulars</div><h3>20-session pack</h3><div class="amt">$45<small>per day</small></div><p>$900 in total, or $1,000 including pick-up and drop-off. Our best value.</p></div>
  </div>
  <div class="note" id="transport"><b>Woof Van pick-up and drop-off.</b> North Shore, Dairy Flat, Riverhead, Kumeu, Coatesville, Hobsonville and Westgate: $25 each way, or $8 per day per dog with a 5 or 10 session package. Huapai, Massey, Ponsonby and Grey Lynn: please contact us for fees. Silverdale, Auckland CBD or any surrounding suburb: contact us, we might be able to help.</div>
  <div class="note"><b>Late pick-up.</b> Between 7:00 pm and 7:30 pm: $20. After 7:30 pm: charged as an additional night of boarding.</div>
</div></section>
<section class="sec" style="padding-top:0"><div class="wrap split">
  <figure class="frame clip" data-parbox style="margin:0">{img_tag("/img/space.webp", "A Woofland team member with dogs")}</figure>
  <div><div class="eyebrow">A day at Woofland</div><h2 class="display h2">Play hard. <span class="it">Rest harder.</span></h2>
    <p>Our daycare is designed for movement, balance and positive social play. Dogs enjoy structured activities, rest time and supervised interaction in a safe, calm environment.</p>
    <p>They build confidence, burn energy and spend their day surrounded by care, routine and familiar faces.</p>
    <a class="tlink" href="/farm-adventure">Add a Farm Adventure</a></div>
</div></section>
''' + faq([("x","Are all breeds welcome?","Yes, as long as they are friendly, social and up to date with their vaccinations. Each dog is assessed before joining group play."),
 ("x","What are your hours?","7:00 am to 7:00 pm, Monday to Friday."),
 ("x","How do you group the dogs?","By energy level and temperament, so every dog has a safe and positive day."),
 ("x","Which vaccinations are required?","Core vaccinations, including kennel cough, must be up to date.")]) + cta()
page("dog-daycare", "Dog Daycare North Shore Auckland | Woofland", "Cage-free, fully supervised dog daycare on Auckland's North Shore. From $47 a day, with Woof Van pick-up and drop-off.", daycare)

# ---------------- HOTEL ----------------
hotel = phero("Dog Hotel", "Dog Hotel &middot; Overnight stays in Auckland", '<span class="ln"><span>Someone is</span></span><span class="ln"><span>always <span class="it">home.</span></span></span>',
  "A home-like dog hotel where a caregiver sleeps beside the dogs at night. Clean, secure, fully supervised, and designed for calm sleep and happy days.", "/img/corridor.webp", "Sleeping pods at the Woofland Dog Hotel", "Hotel",
  '<a class="btn line mag" href="#rooms">See the rooms <i></i></a>') + f'''
<section class="night" aria-label="Overnight care" data-parbox style="min-height:76svh">
  <div class="bg" data-par="10"><img src="/img/suite.webp" alt="A dog asleep at Woofland" loading="lazy"></div><div class="stars"></div>
  <div class="wrap c" data-in><div class="eyebrow" data-fade>What makes it different</div>
    <h2>While you sleep, someone sleeps <em>beside them.</em></h2>
    <div class="cols"><p class="lead" data-fade data-d="1">Overnight, a team member stays and sleeps in the Pack Lounge, providing constant supervision, reassurance and a familiar human presence. Staff are present in the building at all times, day and night.</p><div class="time" data-fade data-d="2">No cages. No crates. No empty building.</div></div></div>
</section>
<section class="sec" id="rooms"><div class="wrap">
  <div class="svc-head"><div><div class="eyebrow">Stay your way</div><h2 class="display h2" style="margin-top:1rem">Three ways to <span class="it">stay.</span></h2></div><p>Different dogs rest differently. We match the room and routine to temperament, social comfort and wellbeing.</p></div>
  <div class="room" data-room="0"><span class="n">01</span><h3 class="display">Pack Lounge<small>Relax. Socialise. Feel at home.</small></h3>
    <p>A shared, home-style space with couches and soft bedding for dogs who enjoy company. Overnight, a team member sleeps in the lounge with them.</p>
    <span class="pr">$90<small>per night. $80 for regular daycare dogs.</small></span><span class="inl"><img src="/img/lounge.webp" alt="Pack Lounge" loading="lazy"></span></div>
  <div class="room" data-room="1"><span class="n">02</span><h3 class="display">Paw Pod<small>Calm. Secure. Private.</small></h3>
    <p>A cosy private pod for dogs who rest best alone. Climate controlled with monitored airflow, comfortable bedding and gentle lighting.</p>
    <span class="pr">$70<small>per night. $63 for regular daycare dogs.</small></span><span class="inl"><img src="/img/pod.webp" alt="Paw Pod" loading="lazy"></span></div>
  <div class="room" data-room="2"><span class="n">03</span><h3 class="display">Alpha Suite<small>Spacious. Quiet. Comfortable.</small></h3>
    <p>Our most spacious and private option, with natural daylight and room for dogs from the same family to stay together. Well suited to longer stays.</p>
    <span class="pr">$180<small>per night. $160 for regular daycare dogs.</small></span><span class="inl"><img src="/img/suite.webp" alt="Alpha Suite" loading="lazy"></span></div>
  <div class="note"><b>Regular daycare rate.</b> For dogs who have attended Woofland at least once every fortnight for a minimum of three consecutive months.</div>
  <div class="note"><b>Hotel transport.</b> Pick-up and drop-off across the North Shore, Dairy Flat, Riverhead, Kumeu, Coatesville, Hobsonville, Westgate, Massey, Ponsonby and Grey Lynn. One way $50, return $80. Silverdale, Auckland CBD or any surrounding suburb: contact us, we might be able to help.</div>
</div></section>
<div class="rfloat" id="rfloat" aria-hidden="true"><img src="/img/lounge.webp" alt=""><img src="/img/pod.webp" alt=""><img src="/img/suite.webp" alt=""></div>
''' + faq([("x","Does someone really stay overnight?","Yes. In the Pack Lounge a caregiver stays and sleeps with the dogs, and staff are present in the building at all times."),
 ("x","What should I bring?","Their bed, food, favourite toy and any necessary medication, so they feel comfortable and at home."),
 ("x","Do new dogs need an assessment?","Yes. Every dog starts with a free trial and assessment before a stay is confirmed."),
 ("x","When can I drop off and pick up?","Hotel drop-offs and pick-ups are available by arrangement.")]) + cta("Planning a trip? <span class=\"it\">Start here.</span>", "Book a free trial and assessment, and we will help you choose the right room for your dog.")
page("dog-hotel", "Dog Hotel & Boarding Auckland | Woofland", "A home-like dog hotel on Auckland's North Shore where a caregiver sleeps beside the dogs at night. Pack Lounge, Paw Pods and Alpha Suites.", hotel)

# ---------------- FARM ----------------
farm = phero("Farm Adventure", "An add-on to daycare", '<span class="ln"><span>A real farm.</span></span><span class="ln"><span>Not just <span class="it">a walk.</span></span></span>',
  "For suitable daycare dogs: at least two hours with paws on the farm, with supervised outdoor play, movement, enrichment and exploration.", "farm", "A Woofland team member with a dog at the farm", "Farm") + f'''
<section class="sec" style="padding-top:clamp(2rem,5vw,4rem)"><div class="wrap">
  <div class="eyebrow">How it works</div><h2 class="display h2" style="margin-top:1rem">Morning routine, then <span class="it">open fields.</span></h2>
  <div class="steps3">
    <div class="st3"><b>1</b><h3>Start at daycare</h3><p>Book a normal daycare day, then add Farm Adventure before submitting your booking. Dogs follow their usual morning routine at our indoor branch.</p></div>
    <div class="st3"><b>2</b><h3>Two hours on the ground</h3><p>Eligible dogs travel in the Woof Van and spend at least two hours at the farm. Travel time is not included.</p></div>
    <div class="st3"><b>3</b><h3>Washed and rested</h3><p>Dogs are washed as needed and return to the indoor branch for rest, comfort and mental stimulation before going home.</p></div>
  </div>
  <div class="note"><b>Who is it for?</b> Daycare dogs who enjoy outdoor environments, sniffing, exploring, running and supervised social play. Suitability depends on temperament, age, confidence, health and behaviour.</div>
</div></section>
''' + faq([("x","Is Farm Adventure included in daycare?","No. It is an extra service added on top of a normal daycare booking."),
 ("x","How long do dogs spend at the farm?","At least two hours, depending on the day's routine, weather, safety and operational conditions."),
 ("x","Do dogs go home dirty?","No. Dogs are washed as needed after the farm session."),
 ("x","Can my dog do Farm Adventure without daycare?","No. Farm Adventure is linked to a normal daycare booking."),
 ("x","Is it suitable for every dog?","No. It depends on the dog's temperament, behaviour, confidence, health and suitability for a supervised farm environment.")]) + cta()
page("farm-adventure", "Dog Farm Adventure Auckland | Woofland", "Woofland Farm Adventure: at least two hours with paws on a real farm, as an add-on to dog daycare on Auckland's North Shore.", farm)

# ---------------- OSTEO ----------------
osteo = phero("Osteopathy &amp; Mobility", "New at Woofland", '<span class="ln"><span>Gentle support</span></span><span class="ln"><span>for <span class="it">movement.</span></span></span>',
  "Selected animal osteopathy consultations hosted at Woofland with visiting practitioner Julie Garreau, for dogs who may benefit from extra support with stiffness, mobility, posture and comfort.", "/img/hero3.webp", "Dogs resting at Woofland", "Mobility") + f'''
<section class="sec" style="padding-top:clamp(2rem,5vw,4rem)"><div class="wrap split">
  <div><div class="eyebrow">Meet Julie Garreau</div><h2 class="display h2">Trained in <span class="it">France.</span></h2>
    <p>Julie holds a degree in animal osteopathy from France, validated by the National Council of the Order of Veterinarians in France. She may use animal osteopathy, dry needling and cold laser therapy within her training and professional scope.</p>
    <p>Owners may consider it for dogs showing stiffness, reduced flexibility, slower rising, sensitivity after activity or ageing-related mobility changes.</p></div>
  <div class="cell" style="min-height:22rem;background:radial-gradient(90% 80% at 30% 20%,rgba(245,166,35,.25),transparent 70%),var(--char)"><div class="k">Convenient for regulars</div><div><h3>Booked alongside daycare or a hotel stay.</h3><p>Contact Woofland to check upcoming consultation availability.</p></div><img class="dogi" src="/img/d4.webp" alt="" loading="lazy" style="width:230px"></div>
</div>
<div class="wrap"><div class="note"><b>Important note.</b> Julie Garreau is not registered as an osteopath in New Zealand. Animal osteopathy consultations at Woofland do not replace veterinary diagnosis, veterinary treatment or emergency veterinary care. If your dog is unwell, injured or in pain, please contact your veterinarian first.</div></div></section>
''' + cta("Ask about an <span class=\"it\">appointment.</span>", "Call 0800 147 369 or email info@woofland.co.nz to check upcoming consultation dates.")
page("dog-osteopathy", "Dog Osteopathy & Mobility Support Auckland | Woofland", "Animal osteopathy consultations hosted at Woofland on Auckland's North Shore with visiting practitioner Julie Garreau.", osteo)

# ---------------- ABOUT ----------------
about = phero("Our Story", "About Woofland", '<span class="ln"><span>Built for</span></span><span class="ln"><span><span class="it">Hapu.</span></span></span>',
  "At the heart of Woofland is a couple, their dog Hapu, and a simple question: why does good dog care have to feel so restrictive?", "founders", "Ryan, Faezeh and Hapu", "Story") + f'''
<section class="sec" style="padding-top:clamp(2rem,5vw,4rem)"><div class="wrap split rev2">
  <figure class="frame clip" data-parbox style="margin:0">{img_tag("/img/storefront.webp", "The Woofland building on Wairau Road")}</figure>
  <div><div class="eyebrow">The gap we saw</div><h2 class="display h2">The warmth of a home. The standards of a <span class="it">facility.</span></h2>
    <p>When planning an overseas trip, Ryan and Faezeh struggled to find a place that truly suited Hapu. Most kennels and dog hotels followed the same model: long hours alone, confined to cages or small suites, with limited human interaction.</p>
    <p>Home-based care felt warmer, but often lacked consistency, structure and long-term commitment. There was no place that combined the presence of a home with the professionalism and purpose-built design of a dedicated facility.</p>
    <p>So Woofland was created to offer dogs space, routine, supervision and meaningful human interaction. Purpose-built environments replaced cages, and calm routines replaced isolation.</p></div>
</div></section>
<section class="sec" style="padding-top:0"><div class="wrap split">
  <div><div class="eyebrow">Meet Ryan</div><h2 class="display h2">Our founder and animal health <span class="it">expert.</span></h2>
    <p>Orhan, known to many as Ryan, holds a veterinary degree and has over five years of experience in New Zealand's animal health industry. While he is not a registered veterinarian in New Zealand, his approach is shaped by professional training, practical experience and a deep respect for dogs' physical and emotional needs.</p>
    <p>He has shared his life with dogs since childhood, grew up on lifestyle farms and brings more than two decades of business experience to Woofland.</p></div>
  <figure class="frame clip" data-parbox style="margin:0">{img_tag("ryan", "Ryan, founder of Woofland, with a dog")}</figure>
</div></section>
''' + cta("Come and <span class=\"it\">meet us.</span>", "Book a free trial and assessment, and see why dogs love spending their days with us.")
page("about", "Our Story | Woofland Dog Daycare & Hotel Auckland", "How a couple and their dog Hapu started Woofland: purpose-built, cage-free dog care on Auckland's North Shore.", about)
print("built")
