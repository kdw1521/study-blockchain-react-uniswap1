import { Button, InputAdornment, TextField } from "@material-ui/core";
import { SwapVerticalCircle } from "@material-ui/icons";
import { ChangeEvent, useEffect, useState } from "react";
import { GRAY_ADDRESS } from "../../constants/addresses";
import { calculateSlippage, getEthToTokenOutputAmount } from "../../functions/swap";
import { fromWei, onEthToTokenSWap, toWei } from "../../utils/ethers";

export function Swap(props: any) {

    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const slippage = 200;

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const onSwap = async () => {
        onEthToTokenSWap(toWei(inputValue), toWei(outputValue), GRAY_ADDRESS, props.network);
    }

    const getOutputAmount = async () => {
        const output = await getEthToTokenOutputAmount(inputValue, GRAY_ADDRESS, props.network);
        const outputWithSlippage = calculateSlippage(slippage, output).minimum;
        setOutputValue(fromWei(outputWithSlippage));
    }

    useEffect(() => {
        getOutputAmount();
    }, [inputValue])

    return (
        <div>

            <div>
                <TextField 
                    value={inputValue}
                    onChange={handleInput}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
                    }} />
            </div>
            <SwapVerticalCircle />
            <div>
                <TextField 
                    value={outputValue}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">GRAY</InputAdornment>,
                    }} />
            </div>
            <Button color="primary" variant="contained" onClick={onSwap}>Swap</Button>
        </div>
    )
}