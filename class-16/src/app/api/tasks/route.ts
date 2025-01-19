import { NextRequest, NextResponse } from "next/server";


const todoTasks: {id: number, title: string}[] = []

let nextID: number = 1


export async function GET(){
    return NextResponse.json(todoTasks)
}

export async function POST (request: NextRequest){
    const {title} = await request.json()

    const newTask = {
        id: nextID++,
        title,
    }

    todoTasks.push(newTask)

    return NextResponse.json({message: "TODO CREATED !!!"})
}


export async function PUT(request: NextRequest){
    const {id, title} = await request.json()

    const taskIndex = todoTasks.findIndex((todoId)=> todoId.id === id)

    if(taskIndex === -1){
        return NextResponse.json({message: "TASK NOT FOUND"}, {status: 404})
    }

    todoTasks[taskIndex].title = title
    
    return NextResponse.json({message: "TASK UPDATED !!"})

}

export async function DELETE(request : NextRequest){
    const {id} = await request.json()

    const taskIndex = todoTasks.findIndex((todoId)=> todoId.id === id)

    if(taskIndex === -1){
        return NextResponse.json({message: "TASK NOT FOUND"}, {status: 404})
    }

    todoTasks.splice(taskIndex, 1)

    return NextResponse.json({message: "TASK DELETED !!!"})
}

