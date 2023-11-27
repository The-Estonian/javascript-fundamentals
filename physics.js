const getAcceleration = (e) => {
  if ('f' in e && 'm' in e) {
    return e.f / e.m;
  } else if ('Δv' in e && 'Δt' in e) {
    return e.Δv / e.Δt;
  } else if ('d' in e && 't' in e) {
    return (2 * e.d) / (e.t * e.t);
  }
};
