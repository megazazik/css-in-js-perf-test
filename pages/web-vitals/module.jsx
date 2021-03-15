import { CModule } from "../../test-components";

export default function Page() {
    return (
        <div key={Date.now()}>
            {new Array(1000).fill(0).map((v, i) => {
                return <CModule key={i} children={i} left={i} />;
            })}
        </div>
    );
}