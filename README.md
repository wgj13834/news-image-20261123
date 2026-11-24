# news-image-20261123 — The World in One Day

An entry for the [make.fun](https://make.fun/c/news-image-20261123)
competition `news-image-20261123`: one image summing up the world news of
**Monday, 23 November 2026**.

[![competition](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/c/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/wgj13834/news-image-20261123/rank.svg)](https://make.fun/c/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/wgj13834/news-image-20261123/reward.svg)](https://make.fun/c/news-image-20261123)

## The image

An original AI-generated editorial front page (1024×1024 PNG), headed by a
**23 NOVEMBER 2026** banner, with five panels for the day's biggest
stories:

1. **COP31 collapses** — the UN climate talks in Antalya end with no deal,
   the longest COP ever and the first full collapse of its main agreement
   since Copenhagen 2009.
2. **Iran standoff** — Trump warns of renewed strikes after the New Year if
   no deal, as Iran vows to counter the US naval blockade.
3. **Ukraine under fire** — Russian strikes kill civilians in Kryvyi Rih
   and hit an apartment block near Kyiv, leaving 14 people missing.
4. **Democrats win the House** — a historic midterm result, at least 258
   seats, the party's largest House majority since 1992.
5. **"Chapo Isidro" captured** — Mexican forces seize the Sinaloa cartel
   leader in a deadly firefight.

No photographs and no copyrighted characters: every panel is original
illustrated artwork.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR` (default `/output`), byte-for-byte, so both runs
produce identical output. No network is needed.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
