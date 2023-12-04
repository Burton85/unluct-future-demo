import {
  g as S,
  r as l,
  h as G,
  i as y,
  c as D,
  a as s,
  b as m,
  w as f,
  T as v,
  o as q,
  j as A,
  v as B,
  k as o,
  n as E,
  t as c,
  d as g
} from './entry.8d7b1d67.js';
import { o as b, u as L } from './index.a42229d1.js';
import { _ as R, a as U } from './book--disable.419feed4.js';
const x = '' + globalThis.__publicAssetsURL('./webp/sustain-a.webp'),
  O = '' + globalThis.__publicAssetsURL('./webp/specialist.webp'),
  j = '' + globalThis.__publicAssetsURL('./webp/engineer2.webp'),
  N = '' + globalThis.__publicAssetsURL('./webp/walker.webp'),
  V = '' + globalThis.__publicAssetsURL('./webp/protector.webp'),
  M = { class: 'section sustain' },
  z = { class: 'section__container sustain__container' },
  H = s('div', { class: 'section__animation sustain__animation' }, null, -1),
  P = s(
    'div',
    { class: 'section__tips' },
    [s('p', null, '點選空白處回到主題')],
    -1
  ),
  Y = s(
    'div',
    { class: 'modal__container' },
    [
      s('div', { class: 'modal__head' }),
      s('div', { class: 'modal__title' }, '永續淨零'),
      s('ul', { class: 'modal__hashTags' }, [
        s('li', null, [s('p', null, '#碳交易')]),
        s('li', null, [s('p', null, '#ESG')]),
        s('li', null, [s('p', null, '#碳權')]),
        s('li', null, [s('p', null, '#綠色能源')])
      ]),
      s(
        'p',
        { class: 'modal__content' },
        ' 如何兼顧經濟發展與社會公正，迎接永續轉型這場馬拉松式挑戰，隨著碳權交易所的成立，台灣的減碳下一步該如何前進，接軌國際。 '
      )
    ],
    -1
  ),
  F = [P, Y],
  I = s(
    'div',
    { class: 'section__tips' },
    [s('p', null, '點選空白處回到主題')],
    -1
  ),
  J = { class: 'chat__title' },
  K = { class: 'chat__diagram' },
  Q = ['src'],
  W = { class: 'chat__diagram' },
  X = s('img', { src: x, alt: '' }, null, -1),
  Z = { class: 'chat__actionGroup' },
  $ = { class: 'chat__actionGroup-item' },
  ss = ['href'],
  ts = ['alt'],
  as = s(
    'div',
    { class: 'chat__actionGroup-item chat__actionGroup-item--empty' },
    [
      s('p', { class: 'mt-auto' }, '敬請期待'),
      s('a', { href: 'javascript:;' }, [
        s('img', { src: U, alt: '' }),
        g(' 閱讀文章 ')
      ])
    ],
    -1
  ),
  ns = S({
    __name: 'Sustain',
    setup(os) {
      const d = l(null),
        [k, w] = G(!0);
      b(d, () => {
        w(!1);
      });
      const r = l(null),
        p = l(null),
        { y: C } = L(p),
        _ = l(!1),
        u = i => {
          (C.value = 0), (_.value = i);
        };
      b(r, () => {
        u(!1);
      });
      const h = l(0),
        e = y(() => Object.values(T)[h.value]),
        n = (i, t) => {
          i.preventDefault(), i.stopPropagation(), u(!_.value), (h.value = t);
        },
        T = {
          specialist: {
            avator: O,
            title:
              '#綠色公民行動－ 企業ESG竟能帶消費者這樣做？響應路跑「看見台灣」刻不容緩',
            question:
              '你知道，我們生活的地球資源還有多少庫存嗎？有科學家計算人類一年可用的自然額度後發現，2023年的8月2號就已經將額度全部花光。所以，我們面對的未來，正以透支的方式消耗著地球資源。可是「地球超載」跟台灣的我們實際的關聯是什麼呢？我們又可以怎麼用小行動帶出未來的大改變？',
            answer:
              '聽「2024關鍵字」一起落實永續，參與健康路跑，共創美好未來。',
            podcast: {
              title:
                '【2024關鍵字Ep.5】企業ESG竟能帶消費者這樣做？響應路跑「看見台灣」刻不容緩',
              link: 'https://solink.soundon.fm/episode/c728837e-5d8e-4634-9e56-6bade8d9b394'
            }
          },
          engineer2: {
            avator: j,
            title: '標題文字',
            question: '對話內容示意」',
            answer: '對話內容示意答',
            podcast: {
              title: '敬請期待」',
              link: 'https://solink.soundon.fm/episode/983b7f88-1f56-4daa-a2d0-623281f88e10'
            }
          },
          walker: {
            avator: N,
            title: '標題文字',
            question: '對話內容示意」',
            answer: '對話內容示意答',
            podcast: {
              title: '敬請期待」',
              link: 'https://solink.soundon.fm/episode/983b7f88-1f56-4daa-a2d0-623281f88e10'
            }
          },
          protector: {
            avator: V,
            title: '標題文字',
            question: '對話內容示意」',
            answer: '對話內容示意答',
            podcast: {
              title: '敬請期待」',
              link: 'https://solink.soundon.fm/episode/983b7f88-1f56-4daa-a2d0-623281f88e10'
            }
          }
        };
      return (i, t) => (
        q(),
        D('div', M, [
          s('div', z, [
            s('div', {
              onClick: t[0] || (t[0] = a => n(a, 0)),
              class: 'diagram'
            }),
            s('div', {
              onClick: t[1] || (t[1] = a => n(a, 1)),
              class: 'diagram'
            }),
            s('div', {
              onClick: t[2] || (t[2] = a => n(a, 2)),
              class: 'diagram'
            }),
            s('div', {
              onClick: t[3] || (t[3] = a => n(a, 3)),
              class: 'diagram'
            }),
            H,
            m(
              v,
              { name: 'float' },
              {
                default: f(() => [
                  A(
                    s(
                      'div',
                      { ref_key: 'modal', ref: d, class: 'modal' },
                      F,
                      512
                    ),
                    [[B, o(k)]]
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
                  var a;
                  return [
                    s(
                      'div',
                      {
                        ref_key: 'chat',
                        ref: r,
                        class: E([{ 'chat--active': o(_) }, 'chat'])
                      },
                      [
                        I,
                        s(
                          'div',
                          {
                            ref_key: 'chatContainer',
                            ref: p,
                            class: 'chat__container'
                          },
                          [
                            s('div', J, c(o(e).title), 1),
                            s('div', K, [
                              s(
                                'img',
                                { src: o(e).avator, alt: '' },
                                null,
                                8,
                                Q
                              ),
                              s('p', null, c(o(e).question), 1)
                            ]),
                            s('div', W, [s('p', null, c(o(e).answer), 1), X]),
                            s('div', Z, [
                              s('div', $, [
                                s(
                                  'p',
                                  null,
                                  c(
                                    (a = o(e)) == null
                                      ? void 0
                                      : a.podcast.title
                                  ),
                                  1
                                ),
                                s(
                                  'a',
                                  { href: o(e).podcast.link, target: '_blank' },
                                  [
                                    s(
                                      'img',
                                      { src: R, alt: o(e).podcast.title },
                                      null,
                                      8,
                                      ts
                                    ),
                                    g(' 立即播放 ')
                                  ],
                                  8,
                                  ss
                                )
                              ]),
                              as
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
export { ns as default };
