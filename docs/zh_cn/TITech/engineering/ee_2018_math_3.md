---
comments: false
title: 東京工業大学 工学院 電気電子系 2018年度 数学 3
tags:
  - TITech
---
# 東京工業大学 工学院 電気電子系 2018年度 数学 3


## **Author**
Zero, 祭音Myyura

## **Description**
以下の (1), (2) に解答せよ。

ただし, 複素数 $z = x + jy$ とし, $x,y$ は実数, $j$ は虚数単位とする。解答は導出過程も含めて示せ。

(1) 下記の (i) (ii) の複素関数 $f(z)$ および $g(z)$ がそれぞれ $z$ によらず正則となるような実数の定数 $a,b,c,d$ を求め, $f(z)$ および $g(z)$ を示せ。

&emsp; (i) $f(z) = x^2 + \sqrt{2}a y^2 + j(\sqrt{3} + b)xy$

&emsp; (ii) $g(z) = \exp\{cxy - j(\sqrt{5}x^2 + dy^2)\}$

(2) 複素関数

$$
h(z) = 2 + \frac{2z}{z - 2}
$$

について以下に答えよ。

&emsp; (a) 特異点を求めよ。

&emsp; (b) 留数を求めよ。

&emsp; ($c$) 積分路 $C_1$ を複素平面上の中心 $0$ 半径 $1$ の円を反時計回り一周するようにとったとき, 下記の複素積分を計算せよ。

$$
\int_{C_1}h(z)\text{d}z
$$

&emsp; (d) 積分路 $C_2$ を複素平面上の中心 $2$ 半径 $1$ の円を反時計回り一周するようにとったとき, 下記の複素積分を計算せよ。

$$
\int_{C_2}h(z)\text{d}z
$$

## **Kai** 
### (1)
#### (i)

$$
\begin{aligned}
f(z) &= x^2 + \sqrt{2}a y^2 + j(\sqrt{3} + b)xy \\
&= u + jv
\end{aligned}
$$

$CR$ 方程式が成立すれば良い。

$$
\frac{\partial u}{\partial x} = 2x, \frac{\partial v}{\partial y} = (\sqrt{3} + b)x
$$

$$
\frac{\partial v}{\partial x} = (\sqrt{3} + b)y , \frac{\partial u}{\partial y} = 2\sqrt{2}ay
$$

$$
\begin{aligned}
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} &\Leftrightarrow  2x = (\sqrt{3} + b)x \\
&\Leftrightarrow 2 = \sqrt{3} + b \\
&\therefore b = 2 - \sqrt{3}
\end{aligned}
$$

$$
\begin{aligned}
-\frac{\partial v}{\partial x} = \frac{\partial u}{\partial y} &\Leftrightarrow -(\sqrt{3} + b)y = 2\sqrt{2}ay \\
&\Leftrightarrow -(\sqrt{3} + 2 - \sqrt{3}) = 2\sqrt{2}a \\
&\Leftrightarrow -2 = 2\sqrt{2}a \\
&\therefore a = -\frac{\sqrt{2}}{2}
\end{aligned}
$$

$$
\begin{aligned}
\therefore f(z) &= x^2 + \sqrt{2}(-\frac{\sqrt{2}}{2})y^2 + j(\sqrt{3} + 2 - \sqrt{3})xy \\
&= (x^2 - y^2) + j2xy
\end{aligned}
$$

#### (ii)

$$
\begin{aligned}
g(z) &= \exp\{cxy - j(\sqrt{5}x^2 + dy^2)\} \\
&= e^{cxy}\{\cos(\sqrt{5}x^2 + dy^2) - j\sin(\sqrt{5}x^2 + dy^2)\} \\
u &= e^{cxy}\cos(\sqrt{5}x^2 + dy^2) \\
v &= -e^{cxy}\sin(\sqrt{5}x^2 + dy^2) \\
\frac{\partial u}{\partial x} &= cye^{cxy} \cos(\sqrt{5}x^2 + dy^2) - 2\sqrt{5}xe^{cxy} \sin(\sqrt{5}x^2 + dy^2)\\
\frac{\partial v}{\partial y} &= -cxe^{cxy} \sin(\sqrt{5}x^2 + dy^2) - 2dye^{cxy} \cos(\sqrt{5}x^2 + dy^2)
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} &\Leftrightarrow   
\left\{
\begin{aligned}
&-2\sqrt{5}xe^{cxy} = -cxe^{cxy} \\
&cye^{cxy} = -2dye^{cxy} 
\end{aligned}
\right. \\
&\Leftrightarrow
\left\{
\begin{aligned}
&c = 2\sqrt{5} \\
&c = -2d \\
\end{aligned}
\right. \\
&\Leftrightarrow
d = -\sqrt{5} \\
\end{aligned}
$$

$$
\therefore c = 2\sqrt{5} , d = -\sqrt{5}
$$

$$
\begin{aligned}
g(z) &= \exp\{2\sqrt{5}xy - j(\sqrt{5}x^2 - \sqrt{5}y^2)\} \\
&= \exp\{2\sqrt{5}xy - j\sqrt{5}(x^2 - y^2)\} 
\end{aligned}
$$

### (2)

$$
h(z) = 2 + \frac{2z}{z - 2} = \frac{2(z - 2) + 2z}{z - 2} = \frac{4z - 4}{z - 2}
$$

#### (a)

$$
z = 2
$$

#### (b)

$$
\begin{aligned}
\text{Res}(h(z),2) &= \lim_{z \rightarrow 2}(z - 2)h(z) \\
&= \lim_{z \rightarrow 2}(4z - 4) \\
&= 4
\end{aligned}
$$

#### ($c$)

$$
\int_{C_1} h(z)\text{d}z = 0
$$

#### (d) 

$$
\int_{C_2}h(z)\text{d}z = 2\pi j \cdot \text{Res}(h(z),2) = 8\pi j
$$