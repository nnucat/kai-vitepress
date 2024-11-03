---
comments: false
title: 東京工業大学 工学院 電気電子系 2018年度 数学 2
tags:
  - TITech
---
# 東京工業大学 工学院 電気電子系 2018年度 数学 2


## **Author**
Zero, 祭音Myyura

## **Description**
以下の問に解答せよ。ただし, 解答は導出過程も含めて記述すること。

(1) 式 $(2.1)$ で表される関数 $f_1(t)$ のラプラス変換 $F_1(s)$ を求めよ。 

$$
f_1(t) = \left\{
\begin{aligned}
&0 &(t < 0) \\
&-t + 1 &(0 \le t \le 1) \\
&0 &(1 < t)
\end{aligned}
\right.\tag{2.1}
$$

(2) 式 $(2.2)$ で表される周期 $4$ の周期関数 $f_2(t)$ がある ( ただし, $c$ は零でない実定数 ) 。また, 式 $(2.2)$ では $-2 < t \le 2$ の範囲のみが示されている。

$$
f_2(t) = \left\{
\begin{aligned}
&ct + c &(-1 < t \le 0) \\
&-ct + c &(0 < t \le 1) \\
&0 &(-2 < t \le -1 , 1 < t \le 2)
\end{aligned}
\right.\tag{2.2}
$$

$f_2(t)$ をフーリエ級数展開したところ, 式 $(2.3)$ で表される関数 $f_3(t)$ が得られた。

$$
\begin{aligned}
f_3(t) = \frac{a_0}{2} + \sum_{k=1}^{\infty}\bigg\{a_k\sin(\frac{k\pi}{2}t) + b_k\cos(\frac{k\pi}{2}t)\bigg\} \tag{2.3}
\end{aligned} 
$$

このとき, 以下の問に答えよ。

&emsp; (a) 式 $(2.3)$ において, $a_0$ を求めよ。

&emsp; (b) 式 $(2.3)$ において, $a_k$ を求めよ。

&emsp; (c) 式 $(2.3)$ において, $b_1$ を求めよ。

## **Kai** 
### (1) 

$$
\begin{aligned}
F_1(s) &= \int_0^{\infty} f_1(t) e^{-st} \text{d}t \\
&= \int_0^1 (-t + 1) e^{-st}\text{d}t \\
&= \bigg[-\frac{1}{s}(1 - t)e^{-st}\bigg]_0^1 - \frac{1}{s} \int_0^1 e^{-st}\text{d}t \\
&= \bigg[0 + \frac{1}{s}\bigg] + \bigg[\frac{1}{s^2} e^{-st}\bigg]_0^1 \\
&= \frac{1}{s} + \frac{1}{s^2} e^{-s} - \frac{1}{s^2} \\
&= \frac{1}{s} + \frac{1}{s^2} (e^{-s} - 1)
\end{aligned}
$$

### (2)
#### (a)

$$
\begin{aligned}
a_0 &= \frac{1}{2}\int_{-2}^2 f_2(t)\text{d}t \\
&= \frac{1}{2} \cdot 2 \int_0^1 c(1 - t) \text{d}t \\
&= c \int_0^1 (1 - t)\text{d}t \\
&= c \bigg[t - \frac{1}{2}t^2\bigg]_0^1 \\ 
&= c(1 - \frac{1}{2}) \\
&= \frac{c}{2}
\end{aligned}
$$

#### (b)
$f_2(c)$ は, 偶関数なので, $a_k = 0$

#### (c)

$$
\begin{aligned}
b_1 &= \frac{1}{2}\int_{-2}^2 f_2(t) \cos(\frac{\pi}{2}t) \text{d}t \\
&= \frac{1}{2} \cdot 2 \int_0^1 c (-t + 1) \cos(\frac{\pi}{2}t) \text{d}t \\
&= c \int_0^1 (1 - t) \cos(\frac{\pi}{2}t) \text{d}t \\
&= c \bigg[(1 - t) \cdot \frac{2}{\pi} \sin(\frac{\pi}{2}t)\bigg]_0^1 + c \int_0^1 \frac{2}{\pi} \sin(\frac{\pi}{2}t) \text{d}t \\
&= \frac{2c}{\pi} (0 - 0) + \frac{2c}{\pi} \bigg[-\frac{2}{\pi}\cos(\frac{\pi}{2}t)\bigg]_0^1 \\
&= \frac{4c}{\pi^2} (-0 + 1) \\
&= \frac{4}{\pi^2}c
\end{aligned}
$$