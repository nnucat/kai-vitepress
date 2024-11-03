---
comments: false
title: 京都大学 理学研究科 物理学・宇宙物理学専攻 2020年度 I-2 (AB)
tags:
  - Kyoto-University
---
# 京都大学 理学研究科 物理学・宇宙物理学専攻 2020年度 I-2 (AB)

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
### I-2A（統計力学）
固体結晶中の 3 次元格子振動をモデル化し，比熱の温度依存性を求めることを考える．結晶を構成する原子の振動は互いに独立な調和振動子として扱えると仮定する．
原子 1 個の質量を $m$，個数を $N$，調和振動子の角振動数を $\omega$ として以下の小問に答えよ．

(1) 古典的に考える．$i$ 番目の振動子について，平衡位置のまわりの変位を $\vec{r_i}$，運動量を $\vec{p_i}$ とする．この系に対するハミルトニアンが

$$
\mathcal{H} = \sum_{i=1}^{N} \Big(\frac{|\vec{p_i}|^2}{2m} + \frac{m\omega^2}{2} |\vec{r_i}|^2 \Big)
$$

で与えられる場合に，カノニカル分布を用いて比熱を計算せよ．必要であればガウス積分

$$
\int_{-\infty}^{\infty} e^{-ax^2} \text{d}x = \sqrt{\frac{\pi}{a}}
$$

を用いてよい．

(2) 1 自由度の調和振動子の固有エネルギーが

$$
E_n = \Big(n + \frac{1}{2} \Big)\hslash \omega \quad (n=0,1,2, \ldots)
$$

と量子的に与えられる場合に，カノニカル分布を用いて比熱を計算せよ．ここで $\hslash$ はプランク定数を $2\pi$ で割ったものとする．

(3) 小問(2)の場合に，十分高温と十分低温での比熱の温度依存性の特徴を述べよ．

### I-2B（量子力学）
質量 $m$ の粒子が $1$ 次元空間でエネルギー $E(> 0)$ を持って高さ $V_0(> 0)$ のポテンシャル障壁に入射する場合を考える．ポテンシャル障壁は $0 \le x \le a$ にあって，

$$
V(x) = \left\{
    \begin{aligned}
    &0 &(x < 0) \\
    &V_0 &(0 \le x \le a) \\
    &0 &(x>a)
    \end{aligned}
    \right .
$$

のように与えられているとし，粒子は $x$ の負の領域から正の方向へ入射するとしよう．
粒子の波動関数 $\psi(x, t) = e^{-iEt/\hslash} \phi(x)$ がシュレディンガー方程式

$$
i\hslash \frac{\partial \psi}{\partial t} = -\frac{\hslash^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V(x) \psi
$$

に従うとして，以下の小問に答えよ．ここで $\hslash$ はプランク定数を $2\pi$ で割ったものとする．

(1) $x = 0$ および $x = a$ ではポテンシャル $V(x)$ は不連続に変化する．これらの点で関数 $\phi(x)$ の空間一階微分が連続であることを示せ．

(2) 入射エネルギー $E$ が障壁の高さ $V_0$ より小さい場合を考える．
このとき粒子はある一定の確率で障壁を通過し，$x > a$ の領域に到達する．
定数 $k$ と $\beta$ をそれぞれ

$$
k = \sqrt{\frac{2mE}{\hslash^2}}, \ \ \beta=\sqrt{\frac{2m(V_0 - E)}{\hslash^2}}
$$

として，透過率を $a$，$k$，$\beta$ を用いて表せ．

(3) 透過率が $0$ に限りなく近づくのは，ポテンシャル障壁の厚さ $a$ がどのような
条件を満たす場合かを答えよ．

## **Kai**
### I-2A（統計力学）
#### (1)
まず、ボルツマン定数を $k_B$ , 絶対温度を $T$ ,
カノニカル分布の分配関数を $Z(T)$ ,
ヘルムホルツの自由エネルギーを $F(T)$ ,
内部エネルギーを $U(T)$ ,
エントロピーを $S(T)$ ,
比熱を $C(T)$ とすると、

$$
\begin{align}
F(T) &= - k_B T \log Z(T)
\\
S(T) &= - \frac{dF(T)}{dT}
\\
U(T)
&= F(T) + T S(T)
\\
&= F(T) - T \frac{dF(T)}{dT}
\\
&= - k_B T \log Z(T) + k_B T \frac{d}{dT} T \log Z(T)
\\
&= k_B T^2 \frac{d}{dT} \log Z(T)
\\
C(T) &= \frac{d U(T)}{dT}
\end{align}
$$

である。

与えられたハミルトニアンに対する分配関数を求めるため、
次の積分を計算しておく
（ $\hbar$ はプランク定数を $2 \pi$ で割ったものである）：

$$
\begin{align}
&\frac{1}{2 \pi \hbar}
\int_{- \infty}^\infty \exp \left( - \frac{p^2}{2m k_B T} \right) dp
\int_{- \infty}^\infty \exp \left( - \frac{m \omega^2 x^2}{2 k_B T} \right) dx
\\
&= \frac{1}{2 \pi \hbar}
\sqrt{2 \pi m k_B T}
\sqrt{\frac{2 \pi k_B T}{m \omega^2}}
\\
&= \frac{k_B T}{\hbar \omega}
\end{align}
$$

よって、分配関数 $Z(T)$ , 内部エネルギー $U(T)$ , 比熱 $C(T)$ 
は次のように計算できる：

$$
\begin{align}
Z(T)
&= \left( \frac{k_B T}{\hbar \omega} \right)^{3N}
\\
U(T)
&= k_B T^2 \frac{d}{dT} \log Z(T)
\\
&= 3N k_B T^2 \frac{d}{dT} \log \left( \frac{k_B T}{\hbar \omega} \right)
\\
&= 3N k_B T
\\
C(T)
&= \frac{d U(T)}{dT}
\\
&= 3N k_B
\end{align}
$$

#### (2)
1自由度の分配関数は次のように計算できる：

$$
\begin{align}
\sum_{n=0}^\infty \exp
\left( - \left(n + \frac{1}{2} \right) \frac{\hbar \omega}{k_B T} \right)
&=
\frac{ \exp \left( - \frac{\hbar \omega}{2k_BT} \right)}
{1 - \exp \left( - \frac{\hbar \omega}{k_BT} \right)}
\\
&=
\frac{1}
{\exp \left( \frac{\hbar \omega}{2k_BT} \right)
- \exp \left( - \frac{\hbar \omega}{2k_BT} \right)}
\\
&=
\frac{1}{2 \sinh \frac{\hbar \omega}{2k_BT}}
\end{align}
$$

よって、分配関数 $Z(T)$ , 内部エネルギー $U(T)$ , 比熱 $C(T)$ 
は次のように計算できる：

$$
\begin{align}
Z(T)
&= \left( 2 \sinh \frac{\hbar \omega}{2k_BT} \right)^{-3N}
\\
U(T)
&= k_B T^2 \frac{d}{dT} \log Z(T)
\\
&= -3N k_B T^2 \frac{d}{dT}
\log \left( 2 \sinh \frac{\hbar \omega}{2k_BT} \right)
\\
&= -3N k_B T^2
\frac{ \cosh \frac{\hbar \omega}{2k_BT} }
{ \sinh \frac{\hbar \omega}{2k_BT} }
\cdot \left( - \frac{\hbar \omega}{2k_BT^2} \right)
\\
&= \frac{3}{2} N \hbar \omega
\frac{ \cosh \frac{\hbar \omega}{2k_BT} }
{ \sinh \frac{\hbar \omega}{2k_BT} }
\\
C(T)
&= \frac{d U(T)}{dT}
\\
&=
\frac{3}{2} N \hbar \omega
\frac{1}
{ \sinh^2 \frac{\hbar \omega}{2k_BT} }
\cdot \left( - \frac{\hbar \omega}{2k_BT^2} \right)
\\
&=
\frac{3 N \hbar^2 \omega^2}
{ 4 k_B T^2 \sinh^2 \frac{\hbar \omega}{2k_BT} }
\end{align}
$$

#### (3)
(i) 
高温すなわち $k_BT \gg \hbar \omega$ のとき、

$$
\begin{align}
\sinh \frac{\hbar \omega}{2k_BT}
\simeq \frac{\hbar \omega}{2k_BT}
\end{align}
$$

であるから、

$$
\begin{align}
C(T)
&\simeq
\frac{3 N \hbar^2 \omega^2}
{ 4 k_B T^2 \left( \frac{\hbar \omega}{2k_BT} \right)^2 }
\\
&=
3Nk_B
\end{align}
$$

となり、 (1) の結果が再現される。

(ii) 
低温すなわち $k_BT \ll \hbar \omega$ のとき、

$$
\begin{align}
\sinh \frac{\hbar \omega}{2k_BT}
\simeq \frac{1}{2} \exp \left( \frac{\hbar \omega}{2k_BT} \right)
\end{align}
$$

であるから、

$$
\begin{align}
C(T)
&\simeq
\frac{3 N \hbar^2 \omega^2}
{ 4 k_B T^2
\left( \frac{1}{2} \exp \left( \frac{\hbar \omega}{2k_BT} \right) \right)^2 }
\\
&=
3Nk_B
\left( \frac{\hbar \omega}{k_BT} \right)^2
\exp \left( - \frac{\hbar \omega}{k_BT} \right)
\end{align}
$$

となる。

### I-2B（量子力学）
#### (1)
与えられたシュレディンガー方程式に $\Psi(x,t)=e^{-iEt/\hbar} \phi(x)$
を代入して整理すると、次を得る：

$$
\begin{align}
E \phi (x) &= - \frac{\hbar^2}{2m} \phi^{''} (x) + V(x) \phi(x)
\\
\therefore \ \ 
\frac{\hbar^2}{2m} \phi^{''} (x) &= \left( V(x) - E \right) \phi(x)
\end{align}
$$

$x_1 \lt 0 \lt x_2$ について、上の式を $x_1$ から $x_2$ まで積分すると、

$$
\begin{align}
\frac{\hbar^2}{2m} \left\{ \phi^{'} (x_2) - \phi^{'} (x_1) \right\}
&=
\int_{x_1}^{x_2} \left( V(x) - E \right) \phi(x) dx
\\
&=
- E \int_{x_1}^0 \phi(x) dx
+ (V_0-E) \int_0^{x_2} \phi(x) dx
\end{align}
$$

である。

$\phi(x)$ は有界であるから、

$$
\begin{align}
\lim_{x_1 \to -0} \int_{x_1}^0 \phi(x) dx = 0
, \ \ 
\lim_{x_2 \to +0} \int_0^{x_2} \phi(x) dx = 0
\end{align}
$$

なので、次を得る：

$$
\begin{align}
\lim_{x_1 \to -0} \phi^{'} (x_1)
= \lim_{x_2 \to +0} \phi^{'} (x_2)
\\
\end{align}
$$

すなわち、$\phi^{'} (x)$ は $x=0$ において連続である。

同様にして、$\phi^{'} (x)$ は $x=a$ においても連続である。

#### (2)
次のようにおくことができる：

$$
\begin{align}
\phi(x) =
\begin{cases}
e^{ikx} + R e^{-ikx}
&( x \leq 0 )
\\
A e^{\beta x} + B e^{- \beta x}
&( 0 \leq x \leq a )
\\
T e^{ikx}
&( a \leq x )
\end{cases}
\end{align}
$$

ここで、複素数 $R,A,B,T$ は次のような接続の条件から決めることができる。

$x=0$ における $\phi(x), \phi^{'}(x)$ の連続性から次を得る：

$$
\begin{align}
1+R=A+B
, \ \ 
ik-ikR= \beta A - \beta B
\end{align}
$$

$x=a$ における $\phi(x), \phi^{'}(x)$ の連続性から次を得る：

$$
\begin{align}
A e^{\beta a} + B e^{- \beta a} = T e^{ika}
, \ \ 
\beta A e^{\beta a} - \beta B e^{- \beta a} = ik T e^{ika}
\end{align}
$$

これを $T$ について解くと、次を得る：

$$
\begin{align}
T =
\frac{2ik \beta e^{-ika}}
{ - (\beta^2 - k^2) \sinh \beta a + 2ik \beta \cosh \beta a }
\end{align}
$$

よって、透過率は次のようになる：

$$
\begin{align}
|T|^2
&=
\frac{4 k^2 \beta^2}
{4 k^2 \beta^2 + (\beta^2 + k^2)^2 \sinh^2 \beta a }
\\
&=
\frac{1}
{ 1 + \frac{(\beta^2 + k^2)^2}{4k^2 \beta^2} \sinh^2 \beta a }
\end{align}
$$

#### (3)
$\beta a \to \infty$ のとき、 $\sinh \beta a \to \infty$
であるから、 $|T|^2 \to 0$ となる。