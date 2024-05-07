package calculate

import (
	"math"
)

func Add(a, b float64) float64 {
	return a + b
}

func Sub(a, b float64) float64 {
	return a - b
}

func Mul(a, b float64) float64 {
	return a * b
}

func Div(a, b float64) float64 {
	return a / b
}

func Sqrt(a float64) float64 {
	return math.Sqrt(a)
}

func Pow(a float64) float64 {
	return a * a
}

func Mod(a, b float64) float64 {
	return math.Mod(a, b)
}
