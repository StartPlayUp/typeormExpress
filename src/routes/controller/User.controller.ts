import { Request, Response } from 'express';
import { createUser, readUser, loginCheckUser, verifyEmailUser } from '../../service/User.service';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { resolve } from 'url';
import config from '../../../config'


const transporter = nodemailer.createTransport(config.mailConfig);

const register = async (req: Request, res: Response) => {
    const { id, nickname, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const emailToken = crypto.randomBytes(64).toString('hex');
    const result = await createUser({
        id,
        nickname,
        email,
        password: hashPassword,
        emailToken,
        isVerified: false,
    });
    const mailOptions = {
        from: '"Verify your email <startPlayUp@gmail.com>',
        to: email,
        subject: 'codewithsid = - verfiy your email',
        html: `
            <h2> ${nickname} 회원님</h2>
            <h4> 가입하시려면 이메일 인증이 필요합니다. 아래 인증하기 버튼을 눌러주세요</h4>
            <a href="http://${req.headers.host}/api/user/verify-email?token=${emailToken}">인증하기</a>
        `
    }
    if (result.success) {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log("인증 메일을 보냈습니다.")
            }
        })

        res.redirect('/login')
        // return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const createToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


const login = async (req: Request, res: Response) => {
    const { id, password } = req.body;
    console.log(id, password)
    const result = await loginCheckUser({ id, password });
    if (result.success) {
        const token = createToken(id)
        res.cookie('access-token', token)
        res.redirect('/dashboard')
        // return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}



const verifyEmail = async (req: Request, res: Response) => {
    const emailToken = req.query.token as string
    console.log(emailToken)
    const result = await verifyEmailUser({ emailToken })
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const logout = async (req: Request, res: Response) => {
    res.cookie('access-token', "", { maxAge: 1 })
    res.redirect('/user/login')
}


const deleteUser = async (req: Request, res: Response) => {
    const nickname = req.query.nickname as string;
    const result = await readUser({ nickname });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}


const getUser = async (req: Request, res: Response) => {
    const nickname = req.query.nickname as string;
    const result = await readUser({ nickname });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}




export { register, getUser, deleteUser, login, logout, verifyEmail }
