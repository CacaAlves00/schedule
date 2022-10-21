function isItSameDay (d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear()
        && d1.getDate() === d2.getDate()
        && d1.getMonth() === d2.getMonth()
}

export interface CalendarObjectInterface {
    event: string,
    date: Date,
    description: string,
    _id?: string
}

interface CalendarAPIAnswerInterface {
    successful: boolean,
    payload: CalendarObjectInterface[],
}

let items: CalendarObjectInterface[] = [
    {
        event: 'Quinta',
        description: 'L ipsumLorem ipsumLorem ipsum',
        date: new Date(),
        _id: '1'
    },
    {
        event: 'Aniversário Siman',
        description: 'Bora farrear',
        date: new Date('2022-10-29'),
        _id: '12'
    },
    {
        event: 'Halloween',
        date: new Date('2022-10-31'),
        description: 'Lorem ipsum',
        _id: '2'
    },
    {
        event: 'Mama, life has just began...',
        description: 'Lorem ipsum',
        date: new Date('2022-11-29'),
        _id: '3'
    },
    {
        event: 'Tuesday\'s gone',
        description: 'Lorem ipsum',
        date: new Date('2022-11-29'),
        _id: '3'
    },
    {
        event: 'Goin\' 2 California',
        description: 'Lorem ipsum',
        date: new Date('2022-10-02'),
        _id: '4'
    },
]

export async function fetchCalendarEvents(date: Date): Promise<CalendarAPIAnswerInterface> {
    const events4Today = items.filter(item => isItSameDay(item.date, date))
    console.log(events4Today)

    return await {
        successful: true,
        payload: events4Today
    }
}

export async function deleteCalendarItem(_id?: string): Promise<any> {
    if (!_id)
        return
    
    items = items.filter(item => item._id !== _id)
}

export async function addCalendarItem(item: CalendarObjectInterface): Promise<any> {
    await items.push(item)
}