import { CreateExchange } from "./CreateExchange";

export function Liquidity(props: any) {
    return (
        <div>
            <CreateExchange network={props.network} />
        </div>
    )
}