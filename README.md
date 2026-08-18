# Diamond Standard Renovations

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diamond Renovations — Precision Renovations, Aurora & the GTA</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,900&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{
    --obsidian:#0a0a0d;
    --charcoal:#141418;
    --charcoal-2:#1b1b21;
    --diamond-white:#f6f5f2;
    --platinum:#aeb2bc;
    --platinum-dim:#787c86;
    --ice:#a9e8f5;
    --ice-dim:#4f8fa0;
    --brass:#cda45f;
    --brass-dim:#7d6535;
    --line:rgba(246,245,242,0.09);
    --line-strong:rgba(246,245,242,0.16);
    --shadow:0 30px 80px -30px rgba(0,0,0,0.7);
    --ease:cubic-bezier(.16,.8,.24,1);
  }

  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}

  body{
    background:var(--obsidian);
    color:var(--diamond-white);
    font-family:'Manrope',sans-serif;
    font-weight:400;
    line-height:1.6;
    overflow-x:hidden;
  }

  @media (prefers-reduced-motion: reduce){
    *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important; scroll-behavior:auto !important;}
  }

  h1,h2,h3,h4{
    font-family:'Fraunces',serif;
    font-weight:600;
    letter-spacing:-0.01em;
    line-height:1.08;
  }

  .eyebrow{
    font-family:'Space Mono',monospace;
    font-size:0.72rem;
    letter-spacing:0.22em;
    text-transform:uppercase;
    color:var(--ice);
    display:flex;
    align-items:center;
    gap:0.65rem;
  }
  .eyebrow::before{
    content:"";
    width:18px;height:1px;background:var(--ice);
    display:inline-block;
  }

  a{color:inherit;text-decoration:none;}
  img{max-width:100%;display:block;}
  section{position:relative;}

  .wrap{
    max-width:1180px;
    margin:0 auto;
    padding:0 6vw;
  }

  ::selection{background:var(--ice);color:var(--obsidian);}

  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible{
    outline:2px solid var(--ice);
    outline-offset:3px;
    border-radius:2px;
  }

  /* ---------- facet divider ---------- */
  .facet-divider{
    height:14px;
    width:100%;
    background:
      linear-gradient(135deg, transparent 49.3%, var(--line-strong) 49.3%, var(--line-strong) 50.7%, transparent 50.7%),
      linear-gradient(45deg, transparent 49.3%, var(--line-strong) 49.3%, var(--line-strong) 50.7%, transparent 50.7%);
    background-size:28px 28px;
    background-position:0 0;
    opacity:0.6;
  }

  /* ---------- nav ---------- */
  header.nav{
    position:fixed;
    top:0;left:0;right:0;
    z-index:100;
    background:rgba(10,10,13,0.72);
    backdrop-filter:blur(14px);
    border-bottom:1px solid var(--line);
  }
  .nav-inner{
    max-width:1180px;
    margin:0 auto;
    padding:1.15rem 6vw;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .logo{
    display:flex;
    align-items:center;
    gap:0.6rem;
    font-family:'Fraunces',serif;
    font-weight:700;
    font-size:1.05rem;
    letter-spacing:0.02em;
    white-space:nowrap;
  }
  .logo svg{width:20px;height:20px;flex:none;}
  .logo b{color:var(--ice);font-weight:700;}
  nav.links{
    display:flex;
    gap:2.1rem;
    font-size:0.88rem;
    color:var(--platinum);
  }
  nav.links a{transition:color .25s var(--ease);}
  nav.links a:hover{color:var(--diamond-white);}
  .nav-cta{
    display:flex;align-items:center;gap:1.4rem;
  }
  .phone-pill{
    font-family:'Space Mono',monospace;
    font-size:0.82rem;
    color:var(--platinum);
    display:flex;
    align-items:center;
    gap:0.5rem;
  }
  .phone-pill svg{width:14px;height:14px;color:var(--ice);}
  .btn{
    display:inline-flex;
    align-items:center;
    gap:0.55rem;
    font-family:'Manrope',sans-serif;
    font-weight:700;
    font-size:0.86rem;
    padding:0.78rem 1.5rem;
    border-radius:2px;
    cursor:pointer;
    border:1px solid transparent;
    transition:transform .3s var(--ease), box-shadow .3s var(--ease), background .3s var(--ease), color .3s var(--ease);
    white-space:nowrap;
  }
  .btn-solid{
    background:linear-gradient(120deg,var(--brass),#e6c07f 45%,var(--brass));
    color:#1a1206;
  }
  .btn-solid:hover{transform:translateY(-2px);box-shadow:0 14px 30px -10px rgba(205,164,95,0.55);}
  .btn-ghost{
    border-color:var(--line-strong);
    color:var(--diamond-white);
    background:transparent;
  }
  .btn-ghost:hover{border-color:var(--ice);color:var(--ice);}
  @media(max-width:880px){
    nav.links{display:none;}
    .phone-pill{display:none;}
  }

  /* ---------- hero ---------- */
  .hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    padding-top:6.5rem;
    background:
      radial-gradient(ellipse 65% 55% at 78% 18%, rgba(169,232,245,0.10), transparent 60%),
      radial-gradient(ellipse 50% 40% at 15% 85%, rgba(205,164,95,0.08), transparent 60%),
      var(--obsidian);
    position:relative;
    overflow:hidden;
  }
  .hero-grid{
    display:grid;
    grid-template-columns:1.05fr 0.95fr;
    gap:3rem;
    align-items:center;
    width:100%;
  }
  .hero h1{
    font-size:clamp(2.6rem,5.4vw,4.5rem);
    color:var(--diamond-white);
    margin:1.1rem 0 1.4rem;
  }
  .hero h1 em{
    font-style:italic;
    background:linear-gradient(100deg,var(--ice),var(--diamond-white) 60%,var(--brass));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
  }
  .hero p.lede{
    font-size:1.08rem;
    color:var(--platinum);
    max-width:38ch;
    margin-bottom:2.1rem;
  }
  .hero-actions{
    display:flex;
    gap:1rem;
    flex-wrap:wrap;
    margin-bottom:2.6rem;
  }
  .hero-proof{
    display:flex;
    gap:2.2rem;
    flex-wrap:wrap;
    border-top:1px solid var(--line);
    padding-top:1.5rem;
  }
  .proof-item{
    display:flex;
    flex-direction:column;
    gap:0.15rem;
  }
  .proof-num{
    font-family:'Fraunces',serif;
    font-size:1.5rem;
    font-weight:600;
    color:var(--diamond-white);
  }
  .proof-label{
    font-size:0.76rem;
    color:var(--platinum-dim);
    letter-spacing:0.03em;
  }

  /* diamond graphic */
  .gem-wrap{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    aspect-ratio:1/1;
  }
  .gem-wrap svg{width:100%;height:100%;max-width:520px;}
  .facet{
    fill:var(--charcoal-2);
    stroke:var(--line-strong);
    stroke-width:1;
    transition:fill .4s var(--ease), stroke .4s var(--ease);
    cursor:pointer;
  }
  .facet:hover, .facet.active{
    fill:rgba(169,232,245,0.14);
    stroke:var(--ice);
  }
  .gem-shine{
    animation:shine 7s ease-in-out infinite;
    transform-origin:center;
  }
  @keyframes shine{
    0%,100%{opacity:0.35;transform:translateX(-14px);}
    50%{opacity:0.85;transform:translateX(14px);}
  }
  .gem-label{
    position:absolute;
    pointer-events:none;
    font-family:'Space Mono',monospace;
    font-size:0.72rem;
    letter-spacing:0.06em;
    color:var(--diamond-white);
    background:rgba(20,20,24,0.92);
    border:1px solid var(--line-strong);
    padding:0.5rem 0.8rem;
    border-radius:2px;
    opacity:0;
    transition:opacity .25s var(--ease), transform .25s var(--ease);
    transform:translateY(6px);
    white-space:nowrap;
    z-index:5;
  }
  .gem-label.show{opacity:1;transform:translateY(0);}
  .gem-hint{
    text-align:center;
    font-family:'Space Mono',monospace;
    font-size:0.7rem;
    color:var(--platinum-dim);
    letter-spacing:0.1em;
    margin-top:0.9rem;
    text-transform:uppercase;
  }
  @media(max-width:880px){
    .hero-grid{grid-template-columns:1fr;}
    .gem-wrap{order:-1;max-width:280px;margin:0 auto;}
  }

  /* ---------- trust bar ---------- */
  .trustbar{
    background:var(--charcoal);
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line);
    padding:2.3rem 0;
  }
  .trust-row{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:1.6rem;
  }
  .trust-item{
    display:flex;
    align-items:center;
    gap:0.7rem;
    font-size:0.92rem;
    color:var(--platinum);
  }
  .trust-item svg{width:18px;height:18px;color:var(--ice);flex:none;}
  .trust-item b{color:var(--diamond-white);font-weight:700;}

  /* ---------- section shared ---------- */
  .section{padding:7.5rem 0;}
  .section-head{
    max-width:640px;
    margin-bottom:3.6rem;
  }
  .section-head h2{
    font-size:clamp(2rem,3.6vw,2.9rem);
    margin-top:0.9rem;
    color:var(--diamond-white);
  }
  .section-head p{
    color:var(--platinum);
    font-size:1.02rem;
    margin-top:1rem;
    max-width:52ch;
  }

  /* ---------- services ---------- */
  .services-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:1px;
    background:var(--line);
    border:1px solid var(--line);
  }
  .service-card{
    background:var(--obsidian);
    padding:2.4rem 1.9rem;
    display:flex;
    flex-direction:column;
    gap:1rem;
    transition:background .35s var(--ease);
    position:relative;
  }
  .service-card:hover{background:var(--charcoal);}
  .service-facet{
    width:34px;height:34px;
    position:relative;
  }
  .service-card h3{
    font-size:1.15rem;
    color:var(--diamond-white);
    font-weight:600;
  }
  .service-card p{
    font-size:0.9rem;
    color:var(--platinum-dim);
  }
  @media(max-width:980px){.services-grid{grid-template-columns:repeat(2,1fr);}}
  @media(max-width:560px){.services-grid{grid-template-columns:1fr;}}

  /* ---------- why us / standard ---------- */
  .standard{
    background:var(--charcoal);
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line);
  }
  .standard-grid{
    display:grid;
    grid-template-columns:0.9fr 1.1fr;
    gap:4rem;
    align-items:start;
  }
  .pull-quote{
    font-family:'Fraunces',serif;
    font-size:clamp(1.5rem,2.6vw,2.1rem);
    font-weight:500;
    font-style:italic;
    color:var(--diamond-white);
    line-height:1.4;
    border-left:2px solid var(--ice);
    padding-left:1.6rem;
  }
  .pull-quote cite{
    display:block;
    font-family:'Space Mono',monospace;
    font-style:normal;
    font-size:0.78rem;
    color:var(--platinum-dim);
    margin-top:1.1rem;
    letter-spacing:0.04em;
  }
  .standard-list{
    display:flex;
    flex-direction:column;
    gap:1.9rem;
  }
  .standard-row{
    display:flex;
    gap:1.4rem;
    padding-bottom:1.9rem;
    border-bottom:1px solid var(--line);
  }
  .standard-row:last-child{border-bottom:none;padding-bottom:0;}
  .standard-mark{
    font-family:'Space Mono',monospace;
    font-size:0.78rem;
    color:var(--ice);
    flex:none;
    width:2.2rem;
    padding-top:0.2rem;
  }
  .standard-row h4{
    font-size:1.05rem;
    color:var(--diamond-white);
    margin-bottom:0.4rem;
    font-weight:600;
  }
  .standard-row p{
    font-size:0.92rem;
    color:var(--platinum-dim);
  }
  @media(max-width:880px){.standard-grid{grid-template-columns:1fr;gap:2.6rem;}}

  /* ---------- process ---------- */
  .process-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:2.4rem;
  }
  .process-step{position:relative;padding-top:1.6rem;}
  .process-step::before{
    content:"";
    position:absolute;
    top:0;left:0;
    width:40px;height:1px;
    background:var(--brass);
  }
  .process-num{
    font-family:'Space Mono',monospace;
    font-size:0.78rem;
    color:var(--brass);
    letter-spacing:0.1em;
  }
  .process-step h3{
    font-size:1.15rem;
    color:var(--diamond-white);
    margin:0.7rem 0 0.6rem;
  }
  .process-step p{
    font-size:0.9rem;
    color:var(--platinum-dim);
  }
  @media(max-width:880px){.process-grid{grid-template-columns:1fr 1fr;row-gap:2.8rem;}}
  @media(max-width:560px){.process-grid{grid-template-columns:1fr;}}

  /* ---------- testimonials ---------- */
  .testimonials{background:var(--charcoal);border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
  .test-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1px;
    background:var(--line);
    border:1px solid var(--line);
  }
  .test-card{
    background:var(--obsidian);
    padding:2.3rem 2rem;
    display:flex;
    flex-direction:column;
    gap:1.1rem;
    justify-content:space-between;
    min-height:230px;
  }
  .test-stars{
    display:flex;gap:0.25rem;
  }
  .test-stars svg{width:14px;height:14px;color:var(--brass);}
  .test-card p{
    font-size:0.95rem;
    color:var(--platinum);
    line-height:1.65;
  }
  .test-name{
    font-family:'Space Mono',monospace;
    font-size:0.76rem;
    color:var(--platinum-dim);
    letter-spacing:0.03em;
  }
  @media(max-width:980px){.test-grid{grid-template-columns:1fr 1fr;}}
  @media(max-width:640px){.test-grid{grid-template-columns:1fr;}}

  /* ---------- cta band ---------- */
  .cta-band{
    position:relative;
    overflow:hidden;
    background:var(--obsidian);
  }
  .cta-inner{
    display:grid;
    grid-template-columns:1.2fr 0.8fr;
    gap:3rem;
    align-items:center;
    padding:5.5rem 0;
    border-top:1px solid var(--line);
  }
  .cta-inner h2{
    font-size:clamp(1.9rem,3.4vw,2.6rem);
    color:var(--diamond-white);
  }
  .cta-inner p{color:var(--platinum);margin-top:0.9rem;max-width:46ch;}
  .emergency-card{
    background:var(--charcoal);
    border:1px solid var(--line-strong);
    padding:2.2rem;
    display:flex;
    flex-direction:column;
    gap:0.9rem;
  }
  .emergency-card .eyebrow{color:var(--brass);}
  .emergency-card .eyebrow::before{background:var(--brass);}
  .emergency-phone{
    font-family:'Fraunces',serif;
    font-size:1.9rem;
    font-weight:600;
    color:var(--diamond-white);
  }
  .emergency-card p{font-size:0.86rem;color:var(--platinum-dim);}
  @media(max-width:880px){.cta-inner{grid-template-columns:1fr;}}

  /* ---------- contact / form ---------- */
  .contact-grid{
    display:grid;
    grid-template-columns:0.9fr 1.1fr;
    gap:4rem;
  }
  .contact-info{display:flex;flex-direction:column;gap:1.7rem;}
  .contact-row{display:flex;gap:1rem;align-items:flex-start;}
  .contact-row svg{width:19px;height:19px;color:var(--ice);flex:none;margin-top:0.15rem;}
  .contact-row h4{font-size:0.95rem;color:var(--diamond-white);margin-bottom:0.25rem;font-weight:600;}
  .contact-row p{font-size:0.88rem;color:var(--platinum-dim);}

  form.quote-form{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:1.1rem;
    background:var(--charcoal);
    border:1px solid var(--line);
    padding:2.4rem;
  }
  .field{display:flex;flex-direction:column;gap:0.5rem;}
  .field.full{grid-column:1/-1;}
  .field label{
    font-family:'Space Mono',monospace;
    font-size:0.7rem;
    letter-spacing:0.08em;
    text-transform:uppercase;
    color:var(--platinum-dim);
  }
  .field input, .field select, .field textarea{
    background:var(--obsidian);
    border:1px solid var(--line-strong);
    color:var(--diamond-white);
    padding:0.85rem 1rem;
    font-family:'Manrope',sans-serif;
    font-size:0.92rem;
    border-radius:2px;
    transition:border-color .25s var(--ease);
  }
  .field input:focus, .field select:focus, .field textarea:focus{
    border-color:var(--ice);
    outline:none;
  }
  .field textarea{resize:vertical;min-height:96px;}
  form.quote-form .btn{grid-column:1/-1;justify-content:center;margin-top:0.4rem;}
  @media(max-width:880px){
    .contact-grid{grid-template-columns:1fr;gap:2.6rem;}
    form.quote-form{grid-template-columns:1fr;}
  }

  /* ---------- footer ---------- */
  footer{
    padding:3.2rem 0 2.4rem;
    border-top:1px solid var(--line);
  }
  .footer-row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:1.2rem;
  }
  .footer-row .logo{font-size:0.98rem;}
  .footer-links{
    display:flex;gap:1.8rem;
    font-size:0.82rem;
    color:var(--platinum-dim);
  }
  .footer-note{
    font-size:0.78rem;
    color:var(--platinum-dim);
    margin-top:1.6rem;
  }

  .reveal{
    opacity:0;
    transform:translateY(18px);
    transition:opacity .8s var(--ease), transform .8s var(--ease);
  }
  .reveal.in{opacity:1;transform:translateY(0);}







    
      
        
        
      
      DIAMOND RENOVATIONS
    
    
      Services
      The Standard
      Process
      Reviews
      Contact
    
    


      
        
        (905) 555-0173
      
      Get Free Quote
    





  


    


      


        

Aurora & the Greater Toronto Area


        

Renovations
cut to precision.


        

Diamond Renovations is a small, owner-run crew led by Tyler — built on fair quotes, honest timelines, and work that's finished the way it was promised. From a single loose faucet to a full backyard rebuild.


        


          Request Your Free Quote
          Read the Reviews
        


        


          


            5.0
            Average Google rating
          


          


            24/7
            Emergency response
          


          


            A–Z
            Repairs to full renovations
          


        


      



      


        


          
            
              
              
              
              
              
              
              
              
              
              
            
          
          


        


        

Hover a facet — every job, one standard


      


    



  

  


    


      


        
        5.0 / 5 average rating on Google
      


      


        
        Owner-run — Tyler is on every job site
      


      


        
        24/7 emergency availability
      


      


        
        Fair, upfront quotes — no surprises
      


    



  


    


      


        

What We Do


        

One crew, every facet of the job.


        

Diamond Renovations handles renovation work at every scale — the same care whether it's a five-minute fix or a five-week build.


      


      


        


          
          

Kitchen & Bathroom Renovations


          

Full remodels handled start to finish — the work our clients call us back for, again and again.


        


        


          
          

Retaining Walls & Landscaping


          

From removal to rebuild — structural work done on time, with improvements suggested along the way at no extra cost.


        


        


          
          

Plumbing & Fixture Repair


          

Loose faucets, leaks, and small fixes — treated with the same thoroughness as a full renovation.


        


        


          
          

Emergency Repairs, 24/7


          

Covered A to Z, day or night. If it can't wait, neither do we.


        


      


    



  


    


      


        

The Diamond Standard


        

Pressure makes diamonds. Care makes them last.


        


          "Tyler is trustworthy and delivers as he has promised… he checks on people that he has working for him to ensure everything is done to his specifications."
          — Heather Hansen, Google Review
        


      


      


        


          01
          


            

Fair, honest quoting


            

Clear pricing before work starts — clients describe the quote as fair and the final bill as matching it.


          


        


        


          02
          


            

On time, every time


            

Timely, punctual, and responsive are the words that come up most in our reviews — because it's the baseline, not the upsell.


          


        


        


          03
          


            

Ideas at no extra cost


            

Tyler brings suggestions to improve the project as he goes — value added, never billed.


          


        


        


          04
          


            

Personally overseen


            

Every crew member works to Tyler's own specifications, checked in on personally from first cut to final walkthrough.


          


        


      


    



  


    


      


        

How It Works


        

From first call to final walkthrough.


      


      


        


          01 · Quote
          

Tell us the job


          

Call, text, or send the form — Tyler gives you a fair, upfront quote with no pressure.


        


        


          02 · Plan
          

We map the details


          

Timeline, materials, and any improvement ideas are laid out before a single tool comes out.


        


        


          03 · Build
          

The crew gets to work


          

Punctual, professional, and checked in on daily to Tyler's own specifications.


        


        


          04 · Reveal
          

Walkthrough & handoff


          

We don't call it done until you do — and we're one call away for whatever comes next.


        


      


    



  


    


      


        

Client Reviews


        

What it's like to work with us.


      


      


        


          


            

★★★★★


            

"Needed an extremely loose faucet repaired. Tyler was timely, thorough, and did an amazing job! Highly recommend!"


          


          Bernard Banks
        


        


          


            

★★★★★


            

"Tyler was great to work with, did an excellent job on our bathroom reno, and was very professional! If you need a reno done, he's the guy to call!"


          


          Braiden Hines
        


        


          


            

★★★★★


            

"We had two retaining walls removed and replaced. The quote was fair and the job was done on time and to more than my satisfaction — he even had suggestions to improve the project at no extra cost."


          


          James Lawson
        


        


          


            

★★★★★


            

"We dealt with Tyler and he was very professional and polite. Great experience — I would recommend to anyone."


          


          Reagan Singh
        


        


          


            

★★★★★


            

"Tyler was fast, professional, and experienced." 
Responsiveness · Punctuality · Quality


          


          Neil Draper
        


        


          


            

★★★★★


            

"If you ever need anything from A to Z — even emergencies — they've got you covered, 24 hours a day, 7 days a week."


          


          Sheikh Ayyaz Mahmood
        


      


    



  


    


      


        

Get Started


        

Your project deserves the same finish, every time.


        

Whether it's one loose faucet or a full home renovation, request a free, no-pressure quote and hear back directly from Tyler.


        Request Your Free Quote
      


      


        

Emergency? We're on call


        

(905) 555-0173


        

Covered A–Z, 24 hours a day, 7 days a week — call anytime, no answering service.


      


    



  

  


    


      


        

Get In Touch


        

Request your free quote.


        

Send a few details about the job and Tyler will get back to you personally — usually the same day.


        


          


            
            


              

Phone


              

(905) 555-0173 — 24/7 for emergencies


            


          


          


            
            


              

Email


              

hello@diamondrenovations.ca


            
          
          


            
            


              

Service Area


              

Aurora, Newmarket, Richmond Hill & the wider GTA


            


          


        
      

      


        


          Name
          
        


        


          Phone
          
        


        


          Email
          @email.com" required>
        
        


          Type of Project
          
            Kitchen or Bathroom Renovation
            Retaining Wall / Landscaping
            Plumbing / Fixture Repair
            Emergency Repair
            Something else
          
        


        


          Project Details
          
        


        Request Your Free Quote
      
    
  






    


      
        
        DIAMOND RENOVATIONS
      
      


        Services
        Reviews
        Contact
      


    


    

© 2026 Diamond Renovations. Owner-operated by Tyler. Serving Aurora & the Greater Toronto Area, 24/7.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1b5735cd-28f4-4644-a4a0-a85eb69e5cf0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
