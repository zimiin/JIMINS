export const DESIGN_HEIGHT = 1024
export const BROWSER_HEIGHT = window.innerHeight

export function verticalScale(height: number) {
  return (height / DESIGN_HEIGHT) * BROWSER_HEIGHT
}