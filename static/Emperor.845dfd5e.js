import {
  g as I,
  r as i,
  h as T,
  i as E,
  c as O,
  a as s,
  b as h,
  w as f,
  T as v,
  o as y,
  j as D,
  v as R,
  k as t,
  n as B,
  t as n,
  d as g
} from './entry.8d7b1d67.js';
import { o as b, u as G } from './index.a42229d1.js';
import { _ as L, a as M } from './book--disable.419feed4.js';
const U = '' + globalThis.__publicAssetsURL('./webp/emperor-a.webp'),
  q = '' + globalThis.__publicAssetsURL('./webp/boss.webp'),
  x = '' + globalThis.__publicAssetsURL('./webp/male.webp'),
  S = '' + globalThis.__publicAssetsURL('./webp/female.webp'),
  j = { class: 'section emperor' },
  N = { class: 'section__container emperor__container' },
  V = s('div', { class: 'section__animation emperor__animation' }, null, -1),
  z = s(
    'div',
    { class: 'section__tips' },
    [s('p', null, '點選空白處回到主題')],
    -1
  ),
  P = s(
    'div',
    { class: 'modal__container' },
    [
      s('div', { class: 'modal__head' }),
      s('div', { class: 'modal__title' }, '韌性企業'),
      s('ul', { class: 'modal__hashTags' }, [
        s('li', null, [s('p', null, '#人才')]),
        s('li', null, [s('p', null, '#數位轉型')]),
        s('li', null, [s('p', null, '#創新應用')])
      ]),
      s(
        'p',
        { class: 'modal__content' },
        ' 面對變動與不可測的風險，企業需要有不被打倒，且還能勝出的韌性。企業該如何提前佈局，從人才到數位轉型，企業如何強健韌性體質，建立生態圈 。 '
      )
    ],
    -1
  ),
  H = [z, P],
  Y = s(
    'div',
    { class: 'section__tips' },
    [s('p', null, '點選空白處回到主題')],
    -1
  ),
  F = { class: 'chat__title' },
  J = { class: 'chat__diagram' },
  K = ['src'],
  Q = { class: 'chat__diagram' },
  W = s('img', { src: U, alt: '' }, null, -1),
  X = { class: 'chat__actionGroup' },
  Z = { class: 'chat__actionGroup-item' },
  $ = ['href'],
  ss = ['alt'],
  ts = s(
    'div',
    { class: 'chat__actionGroup-item chat__actionGroup-item--empty' },
    [
      s('p', null, '敬請期待'),
      s('a', { href: 'javascript:;' }, [
        s('img', { src: M, alt: '' }),
        g(' 閱讀文章 ')
      ])
    ],
    -1
  ),
  is = I({
    __name: 'Emperor',
    setup(as) {
      const r = i(null),
        [A, k] = T(!0);
      b(r, () => {
        k(!1);
      });
      const d = i(null),
        p = i(null),
        { y: w } = G(p),
        c = i(!1),
        m = l => {
          (w.value = 0), (c.value = l);
        };
      b(d, () => {
        m(!1);
      });
      const u = i(1),
        o = E(() => Object.values(C)[u.value]),
        _ = (l, a) => {
          l.preventDefault(), l.stopPropagation(), m(!c.value), (u.value = a);
        },
        C = {
          emperor: {
            avator: q,
            title:
              '#企業韌性－必知！打造低成長時代企業韌性，2024該做好哪些準備？',
            question:
              '2023年全球面臨大環境的不景氣，持續僵持不下的烏俄戰爭，與不斷延燒的美中科技戰、地緣政治等因素，都延續為2024的國際風險。但2024年真有這麼糟嗎？',
            answer: '在AI顛覆性技術下，仍然有轉機！',
            podcast: {
              title: '【2024關鍵字Ep.1】2024指南：打造低成長時代企業韌性',
              link: 'https://solink.soundon.fm/episode/adb4abbf-cbc8-4648-b1ba-12df4ad17e0b'
            }
          },
          male: {
            avator: x,
            title:
              '#Reskilling－AI人機協作時代正式啟動！市場價值鏈重新定義，風險大，還是契機大？',
            question:
              'AI的應用協助我們擺脫重複性工作，投注更多時間創造工作價值。但企業組織從上到下要全面適應AI，究竟我們可以如何重新定義工作，透過實現人機協作來達成工作目標？',
            answer: 'AI人機協作時代正式啟動，一起掌握未來契機。',
            podcast: {
              title:
                '【2024關鍵字Ep.2】AI人機協作時代正式啟動！市場價值鏈重新定義',
              link: 'https://solink.soundon.fm/episode/cff9d90b-2c3b-4ad9-84a5-0e55f4c005c2'
            }
          },
          female: {
            avator: S,
            title: '#A-I-R－全球CEO 2024開局「AI Mindset」，你準備了嗎？',
            question:
              '從2022年11月OpenAI的ChatGPT上線開始，無疑開啟AI新一波浪潮。OpenAI在短短的2個月內就突破了全球1億的MAU，締造驚人的成就；國際投資機構安霍a16z的創辦人也提出生成式AI的來臨，將帶來算力的「第三紀元」。「快速導入AI來協助降本增效，讓自己的企業不要在這波浪潮中被淘汰？」',
            answer:
              'Appier 大中華區暨日本企業解決方案副總 李致杰 (Eric Lee)為您解答',
            podcast: {
              title: '【2024關鍵字Ep.4】全球CEO 2024開局「AI Mindset」',
              link: 'https://solink.soundon.fm/episode/983b7f88-1f56-4daa-a2d0-623281f88e10'
            }
          }
        };
      return (l, a) => (
        y(),
        O('div', j, [
          s('div', N, [
            s('div', {
              onClick: a[0] || (a[0] = e => _(e, 0)),
              class: 'diagram'
            }),
            s('div', {
              onClick: a[1] || (a[1] = e => _(e, 1)),
              class: 'diagram'
            }),
            s('div', {
              onClick: a[2] || (a[2] = e => _(e, 2)),
              class: 'diagram'
            }),
            V,
            h(
              v,
              { name: 'float' },
              {
                default: f(() => [
                  D(
                    s(
                      'div',
                      { ref_key: 'modal', ref: r, class: 'modal' },
                      H,
                      512
                    ),
                    [[R, t(A)]]
                  )
                ]),
                _: 1
              }
            ),
            h(
              v,
              { name: 'float' },
              {
                default: f(() => {
                  var e;
                  return [
                    s(
                      'div',
                      {
                        ref_key: 'chat',
                        ref: d,
                        class: B([{ 'chat--active': t(c) }, 'chat'])
                      },
                      [
                        Y,
                        s(
                          'div',
                          {
                            ref_key: 'chatContainer',
                            ref: p,
                            class: 'chat__container'
                          },
                          [
                            s('div', F, n(t(o).title), 1),
                            s('div', J, [
                              s(
                                'img',
                                { src: t(o).avator, alt: '' },
                                null,
                                8,
                                K
                              ),
                              s('p', null, n(t(o).question), 1)
                            ]),
                            s('div', Q, [s('p', null, n(t(o).answer), 1), W]),
                            s('div', X, [
                              s('div', Z, [
                                s(
                                  'p',
                                  null,
                                  n(
                                    (e = t(o)) == null
                                      ? void 0
                                      : e.podcast.title
                                  ),
                                  1
                                ),
                                s(
                                  'a',
                                  { href: t(o).podcast.link, target: '_blank' },
                                  [
                                    s(
                                      'img',
                                      { src: L, alt: t(o).podcast.title },
                                      null,
                                      8,
                                      ss
                                    ),
                                    g(' 立即播放 ')
                                  ],
                                  8,
                                  $
                                )
                              ]),
                              ts
                            ])
                          ],
                          512
                        )
                      ],
                      2
                    )
                  ];
                }),
                _: 1
              }
            )
          ])
        ])
      );
    }
  });
export { is as default };
