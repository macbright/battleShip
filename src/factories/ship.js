const ship = ((length) => {
  let fire = [];
  const hit = (position) => {
    if(!fire.includes(position)){
			fire.push(+position);
    	return fire;
		}
  };
  const isSunk = (() => {
    return fire.length >= length ? true : false
  });
  return {
    length,
    hit,
    isSunk,
    fire
  }
});
export { ship as default }
