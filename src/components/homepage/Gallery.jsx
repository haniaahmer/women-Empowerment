import React, { useEffect } from "react";
import "./ScrollCircularGallery.css";

const base = "unsplash.com/photo";
const data = [
  {
    common: "Lion",
    binomial: "Panthera leo",
    photo: {
      code: "1583499871880-de841d1ace2a",
      page: "lion-lying-on-brown-rock-MUeeyzsjiY8",
      text: "lion couple kissing on a brown rock",
      pos: "47% 35%",
      by: "Clément Roy",
    },
  },
   {
    common: "Lion",
    binomial: "Panthera leo",
    photo: {
      code: "1583499871880-de841d1ace2a",
      page: "lion-lying-on-brown-rock-MUeeyzsjiY8",
      text: "lion couple kissing on a brown rock",
      pos: "47% 35%",
      by: "Clément Roy",
    },
  },  {
    common: "Lion",
    binomial: "Panthera leo",
    photo: {
      code: "1583499871880-de841d1ace2a",
      page: "lion-lying-on-brown-rock-MUeeyzsjiY8",
      text: "lion couple kissing on a brown rock",
      pos: "47% 35%",
      by: "Clément Roy",
    },
  },  {
    common: "Lion",
    binomial: "Panthera leo",
    photo: {
      code: "1583499871880-de841d1ace2a",
      page: "lion-lying-on-brown-rock-MUeeyzsjiY8",
      text: "lion couple kissing on a brown rock",
      pos: "47% 35%",
      by: "Clément Roy",
    },
  },  {
    common: "Lion",
    binomial: "Panthera leo",
    photo: {
      code: "1583499871880-de841d1ace2a",
      page: "lion-lying-on-brown-rock-MUeeyzsjiY8",
      text: "lion couple kissing on a brown rock",
      pos: "47% 35%",
      by: "Clément Roy",
    },
  },
];

const Gallery = () => {
  useEffect(() => {
    const f = (k) => {
      if (Math.abs(k) > 0.5) {
        scrollTo(
          0,
          0.5 * (k - Math.sign(k) + 1) * (document.documentElement.offsetHeight - window.innerHeight)
        );
      }
    };
    f(-1);
    const onScroll = () => {
      const style = getComputedStyle(document.body);
      const k = +style.getPropertyValue("--k");
      f(k);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="gallery-root" style={{ "--n": data.length }}>
      <svg width="0" height="0" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="7.13" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".02" />
          </feComponentTransfer>
          <feBlend in2="SourceGraphic" />
        </filter>
      </svg>
      <header>
        <h1>Infinite scroll circular gallery</h1>
        <strong>scroll up & down/ use up & down arrow keys</strong>
        <em>
          mostly CSS scroll-driven animations (for rotating gallery on scroll) +
          tiniest bit of JS (for infinite cycling part)
        </em>
      </header>
      <main className="scene">
        <section className="assembly">
          {data.map((c, i) => {
            const img = c.photo;
            const url = `https://images.${base}-${img.code}?h=900`;
            return (
              <article
                key={i}
                style={{
                  "--i": i,
                  "--url": `url(${url})`,
                  ...(img.pos && { "--pos": img.pos }),
                }}
              >
                <header>
                  <h2>{c.common}</h2>
                  <em>{c.binomial}</em>
                </header>
                <figure>
                  <img src={url} alt={img.text} style={{ objectPosition: img.pos || "50% 50%" }} />
                  <figcaption>
                    by <a href={`https://${base}s/${img.page}`} target="_blank" rel="noreferrer">{img.by}</a>
                  </figcaption>
                </figure>
              </article>
            );
          })}
        </section>
      </main>
      <aside className="box-info-scrollani">
        <p>
          Sorry, your browser does not appear to support scroll-driven animation. As of
          January 2025, this is supported in Firefox if the
          <kbd>layout.css.scroll-driven-animations.enabled</kbd> flag is set to true in
          <kbd>about:config</kbd> and in Chromium browsers. Safari support is coming, but it
          hasn't arrived yet.
        </p>
      </aside>
    </div>
  );
};

export default Gallery;
