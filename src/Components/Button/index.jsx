import { Button } from "./style";

function BotaoPadrao({children, ...prosp}) {

    return (
        <Button {...prosp}>{children}</Button>
    )
}

export default BotaoPadrao