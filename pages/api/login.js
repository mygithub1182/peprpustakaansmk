import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
import useSWR from 'swr'

const KEY = 'qwertypjasdfghjklzxcvbnm'

export default function (req ,res){
 
    if(!req.body){
        res.statusCode=404
        res.end('Error')
        return
    }
    const {username,password} = req.body

    res.json({
        token : jwt.sign({
            username,
            admin : username ==='admin' && password === 'admin' 
            
        }, 
        
        KEY
        
        )
        
    })
}