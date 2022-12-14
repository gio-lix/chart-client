import React, {memo} from 'react';
import ReactApexChart from "react-apexcharts";

import usersStore from "../store";

import { useChart} from "../utils/chart";


const Chart = () => {
    const {users} = usersStore(state => state)
    const {chart} = useChart(users)

    return (
        <>
            <ReactApexChart
                options={chart.options}
                series={chart.series}
                type="bar"
                height={250}
                width={600}
            />
        </>
    );
};

export default memo(Chart)



// export default memo(Chart)