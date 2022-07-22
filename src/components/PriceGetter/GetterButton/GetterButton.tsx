import { Button, styled} from '@mui/material';

const GetterButton = styled(Button)({
  position: "absolute",
  left: "0",
  right: "0",
  top: "50%",
  margin: "0 auto",
  border: "8px inset #223212",
  borderRadius:"30px",
  backgroundColor:"#ede334",
  color: "black",
  height: "200px",
  width: "300px",
  fontSize: "22px",
  animationName: 'spin',
  animationDuration: "7000ms",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear", 
  ':hover': {
    height: "210px",
    width: "315px",
    backgroundColor: "#223212",
    color: "#ede334",
    border: "none",
    textShadow: "2px 2px 4px #ffffff",
    boxShadow: "0 0 20px 10px #ede334"
  },
  '@keyframes spin' : {
    from: {
        transform:'rotate(0deg)'
    },
    to: {
        transform:'rotate(360deg)'
    }
  }
}) as typeof Button;

export default GetterButton;
