import {ApexOptions} from "apexcharts";
import {UserType} from "../types/typing";

export const useChart = (users: UserType[]) => {
    const address = users.map(ad => ad.address)

    const newData = address.reduce((acc, a) => {
        return {...acc, [a.city]: (acc[a.city as any] || 0) + 1}
    },[])

    const chart: ApexOptions | any = {
        series: [{
            name: 'Inflation',
            data: Object.values(newData)
        }],
        options : {
            chart: {
                width: 10,
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val: string) {
                    return val + "%";
                },
                offsetY: 8,
                style: {
                    fontSize: '14px',
                    colors: ["#fbfbff"]
                }
            },

            xaxis: {
                categories: Object.keys(newData),
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#6f6fa9',
                            colorTo: '#6f6fa9',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val: string) {
                        return val + "%";
                    }
                }

            },
        },
    }

    return {chart}
}