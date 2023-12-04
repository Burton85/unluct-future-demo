import {
  g as I,
  r as l,
  h as T,
  i as O,
  c as D,
  a as t,
  b as m,
  w as f,
  T as v,
  o as y,
  j as E,
  v as G,
  k as s,
  n as R,
  t as n,
  d as b
} from './entry.8d7b1d67.js';
import { o as g, u as B } from './index.a42229d1.js';
import { _ as L, a as M } from './book--disable.419feed4.js';
const U = '' + globalThis.__publicAssetsURL('./webp/digital-a.webp'),
  q = '' + globalThis.__publicAssetsURL('./webp/robot.webp'),
  x = '' + globalThis.__publicAssetsURL('./webp/engineer.webp'),
  S = '' + globalThis.__publicAssetsURL('./webp/scientist.webp'),
  j = { class: 'section digital' },
  N = { class: 'section__container digital__container' },
  V = t('div', { class: 'section__animation digital__animation' }, null, -1),
  z = t(
    'div',
    { class: 'section__tips' },
    [t('p', null, '點選空白處回到主題')],
    -1
  ),
  P = t(
    'div',
    { class: 'modal__container' },
    [
      t('div', { class: 'modal__head' }),
      t('div', { class: 'modal__title' }, '數位創新'),
      t('ul', { class: 'modal__hashTags' }, [
        t('li', null, [t('p', null, '#AI')]),
        t('li', null, [t('p', null, '#人工智慧')]),
        t('li', null, [t('p', null, '#半導體科技')]),
        t('li', null, [t('p', null, '#6G')])
      ]),
      t(
        'p',
        { class: 'modal__content' },
        ' 人工智能的應用為各產業帶來顛覆性影響，面對顛覆性技術，臺灣產業鍊也將迎來革新，未來又將會帶來哪些創新應用。 '
      )
    ],
    -1
  ),
  H = [z, P],
  Y = t(
    'div',
    { class: 'section__tips' },
    [t('p', null, '點選空白處回到主題')],
    -1
  ),
  F = { class: 'chat__title' },
  J = { class: 'chat__diagram' },
  K = ['src'],
  Q = { class: 'chat__diagram' },
  W = t('img', { src: U, alt: '' }, null, -1),
  X = { class: 'chat__actionGroup' },
  Z = { class: 'chat__actionGroup-item' },
  $ = ['href'],
  tt = ['alt'],
  st = t(
    'div',
    { class: 'chat__actionGroup-item chat__actionGroup-item--empty' },
    [
      t('p', null, '敬請期待'),
      t('a', { href: 'javascript:;' }, [
        t('img', { src: M, alt: '' }),
        b(' 閱讀文章 ')
      ])
    ],
    -1
  ),
  lt = I({
    __name: 'Digital',
    setup(at) {
      const d = l(null),
        [A, k] = T(!0);
      g(d, () => {
        k(!1);
      });
      const r = l(null),
        p = l(null),
        { y: w } = B(p),
        c = l(!1),
        u = o => {
          (w.value = 0), (c.value = o);
        };
      g(r, () => {
        u(!1);
      });
      const h = l(1),
        i = O(() => Object.values(C)[h.value]),
        _ = (o, a) => {
          o.preventDefault(), o.stopPropagation(), u(!c.value), (h.value = a);
        },
        C = {
          engineer: {
            avator: x,
            title: '標題文字',
            question: '對話內容示意」',
            answer: '對話內容示意答',
            podcast: {
              title: '敬請期待」',
              link: 'https://solink.soundon.fm/episode/983b7f88-1f56-4daa-a2d0-623281f88e10'
            }
          },
          robot: {
            avator: q,
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
          scientist: {
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
      return (o, a) => (
        y(),
        D('div', j, [
          t('div', N, [
            t('div', {
              onClick: a[0] || (a[0] = e => _(e, 0)),
              class: 'diagram'
            }),
            t('div', {
              onClick: a[1] || (a[1] = e => _(e, 1)),
              class: 'diagram'
            }),
            t('div', {
              onClick: a[2] || (a[2] = e => _(e, 2)),
              class: 'diagram'
            }),
            V,
            m(
              v,
              { name: 'float' },
              {
                default: f(() => [
                  E(
                    t(
                      'div',
                      { ref_key: 'modal', ref: d, class: 'modal' },
                      H,
                      512
                    ),
                    [[G, s(A)]]
                  )
                ]),
                _: 1
              }
            ),
            m(
              v,
              { name: 'float' },
              {
                default: f(() => {
                  var e;
                  return [
                    t(
                      'div',
                      {
                        ref_key: 'chat',
                        ref: r,
                        class: R([{ 'chat--active': s(c) }, 'chat'])
                      },
                      [
                        Y,
                        t(
                          'div',
                          {
                            ref_key: 'chatContainer',
                            ref: p,
                            class: 'chat__container'
                          },
                          [
                            t('div', F, n(s(i).title), 1),
                            t('div', J, [
                              t(
                                'img',
                                { src: s(i).avator, alt: '' },
                                null,
                                8,
                                K
                              ),
                              t('p', null, n(s(i).question), 1)
                            ]),
                            t('div', Q, [t('p', null, n(s(i).answer), 1), W]),
                            t('div', X, [
                              t('div', Z, [
                                t(
                                  'p',
                                  null,
                                  n(
                                    (e = s(i)) == null
                                      ? void 0
                                      : e.podcast.title
                                  ),
                                  1
                                ),
                                t(
                                  'a',
                                  { href: s(i).podcast.link, target: '_blank' },
                                  [
                                    t(
                                      'img',
                                      { src: L, alt: s(i).podcast.title },
                                      null,
                                      8,
                                      tt
                                    ),
                                    b(' 立即播放 ')
                                  ],
                                  8,
                                  $
                                )
                              ]),
                              st
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
export { lt as default };
