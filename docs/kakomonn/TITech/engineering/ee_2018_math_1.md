---
comments: false
title: 東京工業大学 工学院 電気電子系 2018年度 数学 1
tags:
  - TITech
---
# 東京工業大学 工学院 電気電子系 2018年度 数学 1


## **Author**
Zero, 祭音Myyura

## **Description**
微分方程式に関する以下の問に, 導出過程も含めて答えよ。

(1) 式 $(1.1)$ で与えられる微分方程式がある。ただし, $y$ は $x$ の関数とする。

$$
\frac{\text{d}^2y}{\text{d}x^2} + 4\frac{\text{d}y}{\text{d}x} + 4y = 0 \qquad (1.1)
$$

このとき, 以下の問に答えよ。ただし, $x = 0$ において $y = 0$ および $\text{d}y/\text{d}x = 5$ とする。

&emsp;(a) 式 $(1.1)$ の微分方程式を解き, $y$ を求めよ。

&emsp;(b) 前問 (a) において, $y$ の最大値 $y_{\max}$ を求めよ。

(2) 式 (1.2) で与えられる微分方程式がある。ただし, $y$ は $x$ の関数とし, $y \neq 0$ および $y \neq -2$ とする。また, $x = 0$ において $y = 2$ とする。

$$
\frac{\text{d}y}{\text{d}x} = y(x + 2) \qquad \qquad (1.2)
$$

このとき, $y$ を求めよ。

(3) 式 (1.3) で与えられる微分方程式がある。ただし, $y$ は $x$ の関数とし, $x \neq 0$ および $y \neq 0$ とする。また, $x = 1$ において $y = 2$ とする。

$$
xy \frac{\text{d}y}{\text{d}x} = 2y^2 + x^2 \qquad \quad (1.3)
$$

このとき, 以下の問に答えよ。

&emsp;(a) $u = y/x$ とし式 (1.3) を変形したところ $\text{d}u/\text{d}x = B/A$ の関係式が得られた。ただし, $A$ は $u$ のみの関数とし, $B$ は $x$ のみの関数とする。このとき $A$ と $B$ をそれぞれ求めよ。

&emsp;(b) 式 $(1.3)$ を解いたところ, 最終的に $y^2 = C$ の関係式が得られた。ただし, $C$ は $x$ のみの関数とする。このとき $C$ を求めよ。

## **Kai** 
### (1)

$$
\frac{\text{d}^2y}{\text{d}x^2} + 4\frac{\text{d}y}{\text{d}x} + 4y = 0
$$

#### (a)
特性方程式は,

$$
\lambda^2 + 4\lambda + 4 = 0
$$

$$
\Rightarrow \lambda = -2 \quad (\text{重解})
$$

一般解は, 

$$
y = (c_1 + c_2x)e^{-2x} \quad (c_1,c_2 = \text{constant})
$$

$x = 0, y = 0$ , $\frac{\text{d}y}{\text{d}x} = 5$ より 

$$
c_1 = 0
$$

$$
\frac{\text{d}y}{\text{d}x} = c_2e^{-2x} - 2(c_1 + c_2x)e^{-2x}
$$

$$
\frac{\text{d}y}{\text{d}x}\big|_{x=0} = c_2 = 5
$$

が分かるから、

$$
y = 5xe^{-2x}
$$

を得る。

#### (b)

$\frac{\text{d}y}{\text{d}x} = 0$  となるのは,  $x = \frac{1}{2}$ より

|x|$\cdots$|$\frac{1}{2}$|$\cdots$|
|-|-|-|-|
|y'|+|0|-|
|y|$\nearrow$||$\searrow$|

$
y_{\max} = \frac{5}{2e}
$

### (2)

$$
\begin{aligned}
&\qquad\frac{\text{d}y}{\text{d}x} = y(y + 2) \\
&\Rightarrow \frac{\text{d}y}{y(y+ 2)} = \text{d}x \\
&\Rightarrow \frac{1}{2}\int(\frac{1}{y} - \frac{1}{y + 2})\text{d}y = \int\text{d}x \\
&\Rightarrow  \frac{1}{2}(\log|y| - \log|y + 2|) = x + C \\
&\Rightarrow  \log\bigg|\frac{y}{y + 2}\bigg| = 2x + 2C \\
&\Rightarrow \frac{y}{y + 2} = C'e^{2x} \\
&\Rightarrow  y = C'e^{2x}(y + 2) \\
&\Rightarrow y = \frac{2C'e^{2x}}{1 - C'e^{2x}} \qquad (C,C' = \text{ constant.})
\end{aligned}
$$

$x = 0, y = 2$ より

$$
\frac{2}{4} = C' \Rightarrow C' = \frac{1}{2}
$$

がわかるから

$$
y = \frac{e^{2x}}{1 - \frac{1}{2}e^{2x}} = \frac{2e^{2x}}{2 - e^{2x}}
$$

を得る。

### (3)
#### (a)

$$
\begin{aligned}
&\qquad xy\frac{\text{d}y}{\text{d}x} = 2y^2 + x^2 \\
&\Rightarrow \frac{y}{x}\frac{\text{d}y}{\text{d}x} = 2(\frac{y}{x})^2 + 1 \\
&y = ux , \frac{\text{d}y}{\text{d}x} = u + x\frac{\text{d}u}{\text{d}x} \\
&\Rightarrow u(u + ux\frac{\text{d}u}{\text{d}x}) = 2u^2 + 1 \\
&\Rightarrow u^2 + ux\frac{\text{d}u}{\text{d}x} = 2u^2 + 1 \\
&\Rightarrow ux\frac{\text{d}u}{\text{d}x} = u^2 + 1 \\
&\Rightarrow \frac{\text{d}u}{\text{d}x} = \frac{u^2 + 1}{ux} = \frac{\frac{1}{x}}{\frac{u}{u^2 + 1}} \\
&A = \frac{u}{u^2 + 1}, B = \frac{1}{x}
\end{aligned}
$$

#### (b)

$$
\begin{aligned}
&\qquad \frac{u}{u^2 + 1}\text{d}u = \frac{1}{x}\text{d}x \\
&\Rightarrow \int\frac{u}{u^2 + 1}\text{d}u = \int\frac{1}{x}\text{d}x + C \\
&\Rightarrow \frac{1}{2}\log|u^2 + 1| = \log|x| + C \\
&\Rightarrow \log|u^2 + 1| = \log x^2 + 2C \\
&\Rightarrow u^2 + 1 = C'x^2 \\
&\Rightarrow (\frac{y}{x})^2 + 1 = C'x^2 \\
&\Rightarrow 4 + 1 = C'\\
&\Rightarrow 5 = C' \\
\end{aligned}
$$

$$
\begin{aligned}
(\frac{y}{x})^2 &+ 1 = 5x^2 \\
y^2 &= x^2(5x^2 - 1) \\
C &= x^2(5x^2 - 1)
\end{aligned}
$$