type RandomNumberType = {
    value : number
}

type PositiveNummber = RandomNumberType & {
    isPositive : boolean  
    isNegative?: never
    isZero?: never
}
type NegativeNummber = RandomNumberType & {
    isNegative : boolean  
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isZero : boolean  
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositiveNummber | NegativeNummber | Zero



export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    return(
        <div>
             {value} {isPositive && 'positive'} {isNegative && 'negative'} {''}
             {isZero && 'zero'}
        </div>
    )
}