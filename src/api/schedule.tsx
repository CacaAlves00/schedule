export interface ScheduleObjectInterface {
    name: string,
    description: string,
    weekDay: number,
    _id: string
}

interface ScheduleAPIAnswerInterface {
    successful: boolean,
    payload: ScheduleObjectInterface[],
}

let items: ScheduleObjectInterface[]= [
    {
        name: 'Quinta',
        description: 'L ipsumLorem ipsumLorem ipsum',
        weekDay: 5,
        _id: '1'
    },
    {
        name: 'Quinta 2',
        description: 'L ipsumLorem ipsumLorem ipsum',
        weekDay: 5,
        _id: '12'
    },
    {
        name: 'Log2',
        weekDay: 5,
        description: 'Lorem ipsum',
        _id: '2'
    },
    {
        name: 'Log345',
        description: 'Lorem ipsum',
        weekDay: 5,
        _id: '3'
    },
    {
        name: 'aaaaaaaaaaaaa',
        description: 'Lorem ipsum',
        weekDay: 2,
        _id: '4'
    },
    {
        name: 'Log11111111111111111',
        weekDay: 1,
        description: 'Lorem ipsum',
        _id: '5'
    }
]

export async function fetchSchedule(date: Date): Promise<ScheduleAPIAnswerInterface> {
    const day = date.getUTCDay() + 1

    const schedule4Today = items.filter(item => item.weekDay === day)
    console.log(schedule4Today)
    
    return await {
        successful: true,
        payload: schedule4Today
    }
}

export async function deleteScheduleItem(_id: string): Promise<any> {
    items = items.filter(item => item._id !== _id)
}

export async function addScheduleItem(item: ScheduleObjectInterface): Promise<any> {
    await items.push(item)
}