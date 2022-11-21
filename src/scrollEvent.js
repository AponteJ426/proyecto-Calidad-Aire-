

export const ScrollEventInfo = () => {
    let scrollTop = document.documentElement.scrollTop
    let info = document.querySelectorAll(".infoSensor")
    let infoAnimado = info[0].offsetTop

    if (infoAnimado - 600 < scrollTop) {
        info[0].classList.add("animationInfo")
    }
   

}
export const ScrollPrintDataSensor = () => {
    let scrollTop = document.documentElement.scrollTop
let printDataSensor = document.querySelectorAll(".printDataSensor")
let printDataSensorAnimado = printDataSensor[0].offsetTop

    if (printDataSensorAnimado  < scrollTop) {
        printDataSensor[0].classList.add("printDataSensorAnimation")
    }
}
export const ScrollEventEsp32 = () => {
let scrollTop = document.documentElement.scrollTop
let printEsp32 = document.querySelectorAll(".infoSensorEsp32")
let printDataEsp32Animdo = printEsp32[0].offsetTop


    if (printDataEsp32Animdo  < scrollTop) {
        printEsp32[0].classList.add("printinfoEsp32Animado")
    }
}