// const transition = {
// 	duration: 1,
// 	ease: [0.43, 0.13, 0.23, 0.96]
// };
// const routeVariants = {
// 	exit: { y: '50%', opacity: 0, transition },
// 	enter: {
// 		y: '0%',
// 		opacity: 1,
// 		transition
// 	}
// };
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const routeVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5, transition },
  },
};
