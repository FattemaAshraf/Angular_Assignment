export interface Resource {
    name: string,
    img: string,
    allDay: boolean,
    someDays: boolean,
    months: Array<number> [],
    timeService: boolean,
    fixedTime: boolean,
    bookedPerson: boolean,
    moreBookedPerson: number,
    workedDays: Array<string> [] 
    startedTime: Date,
    endedTime: Date
}
