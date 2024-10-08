---
comments: false
title: 東京大学 総合文化研究科 広域科学専攻 広域システム科学系 2020年度 総合科目 第3問
tags:
  - Tokyo-University
---
# 東京大学 総合文化研究科 広域科学専攻 広域システム科学系 2020年度 総合科目 第3問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
質量 $m_1$ の質点 $1$ と質量 $m_2$ の質点 $2$ が、お互いに万有引力で引き合いながら真空中を運動している。
質点 $2$ から質点 $1$ に向かうベクトルを $\vec{r}$ とし、
二つの質点の重心を原点 $\text{O}$ とする座標系を用いる。
二つの質点は同一平面内を運動するが、$\vec{r}$ をその面内の二次元極座標で表し、
動径および方位角成分を $(r, \phi)$ とする。万有引力定数を $G$ とし、

$$
\begin{aligned}
&\mu = \frac{m_1 m_2}{m_1 + m_2} \\
&M = m_1 + m_2
\end{aligned}
$$

として、以下の設問に答えよ。なお必要に応じて、時間微分を $\dot{r}$ や $\dot{\phi}$ などと上付きドットを用いて表しても良い。

(1) 質点 $1$ および質点 $2$ の位置ベクトルを、$m_1$, $m_2$ および $\vec{r}$ 用いて表せ。

(2) 二つの質点の運動エネルギーの総和を $\mu$, $r$ および $\phi$ を用いて表せ。

(3) この系の重力ポテンシャルエネルギーを $\mu$, $M$, $r$ および $G$ を用いて表せ。

(4) $l \equiv r^2 \phi$ が保存量となることを示せ。

(5) 動径成分 $r$ についての運動方程式を、$\mu$, $M$, $r$, $l$ および $G$ を用いて書き下せ。

(6) 系の全エネルギー $E$ を $\mu$, $M$, $r$, $l$ および $G$ で表せ。

(7) $E$が最小値を取る時の $E$ の表式を $\mu$, $M$, $l$ および $G$ を用いて求め、その時の二つの質点の軌道の様子を述べよ。

(8) $\vec{r}=(r_1, \phi_1)$ を質点 $1$ の位置ベクトルとする。
二つの質点のが重力的に束縛されお互いの周りを周回する条件と、その時の $r_1$ と $\phi_1$ の関係を求めよ。

## **Kai**
### (1)
題意より、

$$
\begin{aligned}
m_1 \vec{r}_1 + m_2 \vec{r}_2 = \vec{0}
, \ \ \ \ 
\vec{r} = \vec{r}_1 - \vec{r}_2
\end{aligned}
$$

であるから、

$$
\begin{aligned}
\vec{r}_1 = \frac{m_2}{m_1+m_2} \vec{r}
, \ \ \ \ 
\vec{r}_2 = - \frac{m_1}{m_1+m_2} \vec{r}
\end{aligned}
$$

を得る。

### (2)
$\vec{r}$ のデカルト座標による成分を $(x,y)$ とすると、

$$
\begin{aligned}
x &= r \cos \phi
\\
y &= r \sin \phi
\\
\dot{x} &= \dot{r} \cos \phi - r \dot{\phi} \sin \phi
\\
\dot{y} &= \dot{r} \sin \phi + r \dot{\phi} \cos \phi
\\
\left| \dot{\vec{r}} \right|^2
&= \dot{x}^2 + \dot{y}^2
= \dot{r}^2 + r^2 \dot{\phi}^2
\end{aligned}
$$

である。

よって、求める運動エネルギー $K$ は、

$$
\begin{aligned}
K
&= \frac{1}{2} m_1 \left| \dot{\vec{r}_1} \right|^2
+ \frac{1}{2} m_2 \left| \dot{\vec{r}_2} \right|^2
\\
&= \frac{1}{2} \frac{m_1 m_2^2 + m_1^2 m_2}{(m_1+m_2)^2}
\left| \dot{\vec{r}} \right|^2
\\
&= \frac{1}{2} \frac{m_1 m_2}{m_1+m_2}
\left( \dot{r}^2 + r^2 \dot{\phi}^2 \right)
\\
&= \frac{1}{2} \mu \left( \dot{r}^2 + r^2 \dot{\phi}^2 \right)
\end{aligned}
$$

となる。

### (3)
求める重力ポテンシャルエネルギー $U$ は、

$$
\begin{aligned}
U = - G \frac{m_1 m_2}{r}
= - \frac{G \mu M}{r}
\end{aligned}
$$

である。

### (4)
この系のラグランジアン $L$ は、

$$
\begin{aligned}
L = K - U
= \frac{1}{2} \mu \left( \dot{r}^2 + r^2 \dot{\phi}^2 \right)
+ \frac{G \mu M}{r}
\end{aligned}
$$

であり、

$$
\begin{aligned}
\frac{\partial L}{\partial \phi}
&= 0
\\
\frac{\partial L}{\partial \dot{\phi}}
&= \mu r^2 \dot{\phi}
= \mu l
\end{aligned}
$$

であるから、 $\phi$ に関する運動方程式より、
$l$ が保存量であることがわかる。

### (5)
上で求めたラグランジアン $L$ から、

$$
\begin{aligned}
\frac{\partial L}{\partial r}
&= \mu r \dot{\phi}^2 - \frac{G \mu M}{r^2}
= \frac{\mu l^2}{r^3} - \frac{G \mu M}{r^2}
\\
\frac{\partial L}{\partial \dot{r}}
&= \mu \dot{r}
\end{aligned}
$$

であるから、 $r$ に関する運動方程式は、

$$
\begin{aligned}
\mu \ddot{r}
&= \frac{\mu l^2}{r^3} - \frac{G \mu M}{r^2}
\\
\therefore \ \ \ \ 
\ddot{r}
&= \frac{l^2}{r^3} - \frac{G M}{r^2}
\end{aligned}
$$

となる。

### (6)

$$
\begin{aligned}
E = K + U
&= \frac{1}{2} \mu \left( \dot{r}^2 + r^2 \dot{\phi}^2 \right)
- \frac{G \mu M}{r}
\\
&= \frac{1}{2} \mu \left( \dot{r}^2 + \frac{l^2}{r^2} \right)
- \frac{G \mu M}{r}
\end{aligned}
$$

### (7)

$$
\begin{aligned}
V(r)
= \frac{1}{2} \mu \frac{l^2}{r^2} - \frac{G \mu M}{r}
\end{aligned}
$$

とすると、

$$
\begin{aligned}
V'(r)
&= - \mu \frac{l^2}{r^3} + \frac{G \mu M}{r^2}
\\
&= \mu \frac{- l^2 + G M r}{r^3}
\end{aligned}
$$

となるので、

$$
\begin{aligned}
r_0 = \frac{l^2}{GM}
\end{aligned}
$$

とすると、 $V(r)$ が最小値をとるのは $r=r_0$ のときで、

$$
\begin{aligned}
V(r_0)
= - \frac{1}{2} \frac{G^2 \mu M^2}{l^2}
\end{aligned}
$$

となる。

$E$ が最小値 $E_0$ をとるのもこのときで、

$$
\begin{aligned}
E_0
= - \frac{1}{2} \frac{G^2 \mu M^2}{l^2}
\end{aligned}
$$

である。

### (8)