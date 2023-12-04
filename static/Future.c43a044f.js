import {
  g as y,
  r as i,
  h as O,
  i as N,
  c as D,
  a as t,
  b as m,
  w as f,
  T as v,
  o as P,
  j as q,
  v as A,
  k as o,
  n as B,
  t as c,
  d as g
} from './entry.8d7b1d67.js';
import { o as b, u as L } from './index.a42229d1.js';
import { _ as R, a as U } from './book--disable.419feed4.js';
const x = '' + globalThis.__publicAssetsURL('./webp/future-a.webp'),
  G = '' + globalThis.__publicAssetsURL('./webp/doctor.webp'),
  S = '' + globalThis.__publicAssetsURL('./webp/family.webp'),
  j = '' + globalThis.__publicAssetsURL('./webp/neighbor.webp'),
  V = '' + globalThis.__publicAssetsURL('./webp/older.webp'),
  E = { class: 'section future' },
  M = { class: 'section__container future__container' },
  z = t('div', { class: 'section__animation future__animation' }, null, -1),
  F = t(
    'div',
    { class: 'section__tips' },
    [t('p', null, '點選空白處回到主題')],
    -1
  ),
  H = t(
    'div',
    { class: 'modal__container' },
    [
      t('div', { class: 'modal__head' }),
      t('div', { class: 'modal__title' }, '未來社會'),
      t('ul', { class: 'modal__hashTags' }, [
        t('li', null, [t('p', null, '#智慧醫療')]),
        t('li', null, [t('p', null, '#遠距醫療')]),
        t('li', null, [t('p', null, '#銀科技')]),
        t('li', null, [t('p', null, '#永續社會')])
      ]),
      t(
        'p',
        { class: 'modal__content' },
        ' 2025年台灣將邁入超高齡社會，面臨著高齡化及產業落後等種種挑戰，將會帶來哪些影響以及新商機，如何創造新機會。 '
      )
    ],
    -1
  ),
  Y = [F, H],
  I = t(
    'div',
    { class: 'section__tips' },
    [t('p', null, '點選空白處回到主題')],
    -1
  ),
  J = { class: 'chat__title' },
  K = { class: 'chat__diagram' },
  Q = ['src'],
  W = { class: 'chat__diagram' },
  X = t('img', { src: x, alt: '' }, null, -1),
  Z = { class: 'chat__actionGroup' },
  $ = { class: 'chat__actionGroup-item' },
  tt = ['href'],
  st = ['alt'],
  at = t(
    'div',
    { class: 'chat__actionGroup-item chat__actionGroup-item--empty' },
    [
      t('p', { class: 'mt-auto' }, '敬請期待'),
      t('a', { href: 'javascript:;' }, [
        t('img', { src: U, alt: '' }),
        g(' 閱讀文章 ')
      ])
    ],
    -1
  ),
  nt = y({
    __name: 'Future',
    setup(ot) {
      const _ = i(null),
        [k, w] = O(!0);
      b(_, () => {
        w(!1);
      });
      const r = i(null),
        p = i(null),
        { y: C } = L(p),
        d = i(!1),
        u = l => {
          (C.value = 0), (d.value = l);
        };
      b(r, () => {
        u(!1);
      });
      const h = i(0),
        e = N(() => Object.values(T)[h.value]),
        n = (l, s) => {
          l.preventDefault(), l.stopPropagation(), u(!d.value), (h.value = s);
        },
        T = {
          doctor: {
            avator: G,
            title:
              '#永續社會NPO－社會健康穩定的關鍵——NPO　如何迎戰時局，展現創新力？',
            question:
              '當我們每天忙碌對抗通膨、拚經濟，或急著跟上新科技快速且高壓的腳步，其實也需要有穩定的力量兼顧社會關係與健康，才能達成永續社會的目標！關照社會各處待援族群的非營利組織（NPO）扮演了關鍵角色！',
            answer: '讓腦麻協會理事長卓碧金帶您認識NPO的日常事務與事蹟。',
            podcast: {
              title:
                '【2024關鍵字Ep.3】社會健康穩定的關鍵——NPO　如何迎戰時局，展現創新力？',
              link: 'https://solink.soundon.fm/episode/34cd3e74-ea35-41d3-bd41-ad7958afb1cd'
            }
          },
          family: {
            avator: S,
            title: '標題文字',
            question: '對話內容示意」',
            answer: '對話內容示意答',
            podcast: {
              title: '敬請期待」',
              link: 'https://solink.soundon.fm/episode/983b7f88-1f56-4daa-a2d0-623281f88e10'
            }
          },
          neighbor: {
            avator: j,
            title: '標題文字',
            question: '對話內容示意」',
            answer: '對話內容示意答',
            podcast: {
              title: '敬請期待」',
              link: 'https://solink.soundon.fm/episode/983b7f88-1f56-4daa-a2d0-623281f88e10'
            }
          },
          older: {
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
      return (l, s) => (
        P(),
        D('div', E, [
          t('div', M, [
            t('div', {
              onClick: s[0] || (s[0] = a => n(a, 0)),
              class: 'diagram'
            }),
            t('div', {
              onClick: s[1] || (s[1] = a => n(a, 1)),
              class: 'diagram'
            }),
            t('div', {
              onClick: s[2] || (s[2] = a => n(a, 2)),
              class: 'diagram'
            }),
            t('div', {
              onClick: s[3] || (s[3] = a => n(a, 3)),
              class: 'diagram'
            }),
            z,
            m(
              v,
              { name: 'float' },
              {
                default: f(() => [
                  q(
                    t(
                      'div',
                      { ref_key: 'modal', ref: _, class: 'modal' },
                      Y,
                      512
                    ),
                    [[A, o(k)]]
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
                    t(
                      'div',
                      {
                        ref_key: 'chat',
                        ref: r,
                        class: B([{ 'chat--active': o(d) }, 'chat'])
                      },
                      [
                        I,
                        t(
                          'div',
                          {
                            ref_key: 'chatContainer',
                            ref: p,
                            class: 'chat__container'
                          },
                          [
                            t('div', J, c(o(e).title), 1),
                            t('div', K, [
                              t(
                                'img',
                                { src: o(e).avator, alt: '' },
                                null,
                                8,
                                Q
                              ),
                              t('p', null, c(o(e).question), 1)
                            ]),
                            t('div', W, [t('p', null, c(o(e).answer), 1), X]),
                            t('div', Z, [
                              t('div', $, [
                                t(
                                  'p',
                                  null,
                                  c(
                                    (a = o(e)) == null
                                      ? void 0
                                      : a.podcast.title
                                  ),
                                  1
                                ),
                                t(
                                  'a',
                                  { href: o(e).podcast.link, target: '_blank' },
                                  [
                                    t(
                                      'img',
                                      { src: R, alt: o(e).podcast.title },
                                      null,
                                      8,
                                      st
                                    ),
                                    g(' 立即播放 ')
                                  ],
                                  8,
                                  tt
                                )
                              ]),
                              at
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
export { nt as default };
