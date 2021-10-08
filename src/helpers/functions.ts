export const formatDate = (date: Date): string => {
    let str = [
        '0' + (date.getMonth() + 1),
        '0' + date.getDate()
    ].map(component => component.slice(-2));
    return date.getFullYear() + "-" + str.join("-");
}
