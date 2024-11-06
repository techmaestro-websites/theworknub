import { Button } from "../ui/button"

type ButtonProps = {
    className?: string,
    label?: string,
}


const Cta = ({className, label}: ButtonProps) => {
  return <Button variant='default' size='lg' className={`bg-[#F9690E] hover:bg-[#f4813a] capitalize rounded-xl ${className} `}>
    {label}
  </Button>
}
export default Cta