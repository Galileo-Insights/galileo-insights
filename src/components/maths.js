export const describeArc = (x, y, radius, spread, startAngle, endAngle) => {
  var innerStart = polarToCartesian(x, y, radius, endAngle);
  var innerEnd = polarToCartesian(x, y, radius, startAngle);
  var outerStart = polarToCartesian(x, y, radius + spread, endAngle);
  var outerEnd = polarToCartesian(x, y, radius + spread, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    outerStart.x,
    outerStart.y,
    "A",
    radius + spread,
    radius + spread,
    0,
    largeArcFlag,
    0,
    outerEnd.x,
    outerEnd.y,
    "L",
    innerEnd.x,
    innerEnd.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    1,
    innerStart.x,
    innerStart.y,
    "L",
    outerStart.x,
    outerStart.y,
    "Z",
  ];

  return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
