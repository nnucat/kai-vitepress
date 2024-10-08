---
comments: false
title: 東北大学 医工学研究科 医学系コース 2023年実施 数学基礎 問題4-6
tags:
  - Tohoku-University
---
# 東北大学 医工学研究科 医学系コース 2023年実施 数学基礎 問題4-6

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### 問題4
#### (1)

$$
\begin{aligned}
\frac{dy}{y^2} &= \frac{dx}{x}
\\
\therefore \ \ 
- \frac{1}{y} &= \log_e \left| x \right| + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\\
\therefore \ \ 
y &= - \frac{1}{\log_e \left| x \right| + C}
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\frac{dy}{y} &= 5x dx
\\
\therefore \ \ 
\log_e \left| y \right| &= \frac{5}{2} x^2 + C'
\ \ \ \ \ \ \ \ ( C' \text{ は積分定数 } )
\\
\therefore \ \ 
y &= C e^{\frac{5}{2} x^2}
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

### 問題5

$$
\begin{aligned}
\begin{pmatrix}
\cos \left( \frac{2}{3} \pi \right) &
- \sin \left( \frac{2}{3} \pi \right) \\
\sin \left( \frac{2}{3} \pi \right) &
\cos \left( \frac{2}{3} \pi \right)
\end{pmatrix}
\begin{pmatrix} 3 \\ \sqrt{3} \end{pmatrix}
= 
\begin{pmatrix}
- \frac{1}{2} &
- \frac{\sqrt{3}}{2} \\
\frac{\sqrt{3}}{2} &
- \frac{1}{2}
\end{pmatrix}
\begin{pmatrix} 3 \\ \sqrt{3} \end{pmatrix}
= 
\begin{pmatrix} -3 \\ \sqrt{3} \end{pmatrix}
\end{aligned}
$$

なので、求める点の座標は $(-3, \sqrt{3})$ である。

### 問題6
#### (1)

$$
\begin{aligned}
\begin{pmatrix} 1 & 1 & -5 \\ -2 & 1 & 5 \\ 0 & -1 & 2 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} 8 \\ -8 \\ -3 \end{pmatrix}
\end{aligned}
$$

#### (2)
拡大係数行列

$$
\begin{aligned}
\begin{pmatrix}
1 & 1 & -5 & 8 \\
-2 & 1 & 5 & -8 \\
0 & -1 & 2 & -3
\end{pmatrix}
\end{aligned}
$$

を次のように行基本変形できる：

$$
\begin{aligned}
\begin{pmatrix}
1 & 1 & -5 & 8 \\
0 & 1 & -2 & 3 \\
0 & 3 & -5 & 8
\end{pmatrix}
\\
\begin{pmatrix}
1 & 0 & -3 & 5 \\
0 & 1 & -2 & 3 \\
0 & 0 &  1 & -1
\end{pmatrix}
\\
\begin{pmatrix}
1 & 0 & 0 & 2 \\
0 & 1 & 0 & 1 \\
0 & 0 & 1 & -1
\end{pmatrix}
\end{aligned}
$$

よって、求める解は $x=2,y=1,z=-1$ である。