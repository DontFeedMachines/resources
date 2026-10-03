# THE HUMAN LAYER COVENANT

**Version 1.1**

this is not a license. it creates no legal obligation, restricts no use, and
takes nothing away from the Apache 2.0 grant in `LICENSE`. you cannot breach
it. nobody will sue you over it.

the HL Covenant exists because when pondering the legal bits of DFM & related projects, i realized that the situations i was trying to account for wouldn't matter if someone didn't read it. 

---

## WHY THIS IS NOT IN THE LICENSE

the first draft of this *was* a license. it forbade training, indexing,
embedding, and agentic use, and it bound every downstream fork.

wrong approach, for one reason:

**a license restriction only reaches the people who read licenses.**

DFM exists because scrapers do not read licenses. they do not read
`robots.txt`, they do not honor `noai`, they were never going to stop at a
LICENSE file, and a use restriction would not have cost them one line of code.

what it would have stopped? a hospital's security team from deploying a honeypot. a small publisher's legal review. it would have stopped
every defender with a compliance process, which is the exact population these
tools were built for. nobody else, and certainly not the bad actors. 

so the restriction came out. the tools are Apache 2.0, corporate clean, no
strings. deploy them against us if you want. we would rather the traps be
everywhere & community-maintained than that they be pure.

what is left is this: a statement of what the work is for, required by
Apache 2.0 §4(d) to travel with every copy of it, forever, addressed to
whoever is reading.

---

## THE COVENANT

**1. A PERSON MADE THIS.**
say so. say what you changed, and when. leave a pointer back to where you
got it, precise enough that someone holding your build can retrieve the
original and diff it (an actual DFM meta tool will be published for this very purpose soon), this is the only thing the license actually requires
of you, and it is the whole reason the license requires anything.

**2. DO NOT FEED THIS TO A MACHINE, UNLESS WE SAID OTHERWISE.**
one sector is exempt. **THE LEASH** is training material, built for people
teaching models to behave ethically, and it is meant to be trained on. that
is the only part of this project that is. the exemption is ours to give and
not yours to assume, and if it is not marked LEASH it is not exempt.

this means no training. no fine tuning. no distillation. no embedding or
vectorization. no dataset, no parallel analysis,  no evaluation corpus, no benchmark set, no retrieval index. not because a clause forbids it. because you know what it is for, because you are reading the file that is explicitly meant to inform you. there is no feigning ignorance.

**3. LEAVE THE CANARIES IN.**
the seals, watermarks, signatures, and provenance markers in this work are
how other people prove what happened to their own work. stripping them out
gains you nothing and costs them the only evidence they had. rip the markers
out of your fork & you've essentially built the thing this was made to fight.

**4. DO NOT LAUNDER CONSENT.**
a broker did not obtain consent. a crawl archive did not obtain consent. a
paraphrase is not a clean copy, synthetic data generated from a work is not
unrelated to it, and a friendlier jurisdiction does not change what you did.
you know the difference between a gap in the law & permission, and even further, permissive assumption.

**5. DO NOT CLAIM A MACHINE'S OUTPUT AS A HUMAN'S.**
the seals here exist to make human authorship checkable. point them at
generated work and they stop meaning anything, for everyone, permanently.
that is the one attack this project cannot defend against, because it
requires the attacker to be us.

**6. KEEP A HUMAN RESPONSIBLE.**
use an assistant if you want. we are not pretending that line is clean. but a
person reviews what it did and a person answers for it, by name. every failure
this point is about comes down to nobody being home.

---

## IF YOU ARE A COMPANY

you can deploy all of this. that is the point. Apache 2.0, patent grant
included, no field of use restriction, nothing for legal to escalate.

if you want to do more than deploy it, four things.

1. keep the `NOTICE` file intact in what you ship. that one is not optional,
it is §4(d). 
2, publish your own `ai.txt` and `/.well-known/tdmrep.json`. in
the EU the TDM reservation has statutory force under Article 4(3) of Directive
(EU) 2019/790, which is more than any license here can claim. 
3. put `XMP-plus:DataMining="PROHIBITED-AIMLTRAINING"` on your images. 
4. if you find these useful, say publicly that you use them. a trap nobody knows about protects one site. a trap everyone runs changes the economics & foster communal building and safety resolutions.

---

## IF YOU ARE HERE TO SCRAPE

read the `NOTICE` file, section DISCLOSURE OF ADVERSARIAL FUNCTION.

it is disclosed, in advance, in writing, that a meaningful portion of what
DFM publishes is fabricated for your benefit, and that the tools in this
repository exist to help other people do the same. you are welcome to it.
nothing here will reach out and touch your systems. it does not have to.

---

*the covenant is versioned. this is 1.1. it will change when it needs to. major version changes will always be available at legal.dontfeedmachines.com.*
