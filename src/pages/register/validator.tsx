import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    name: yup.string().required('Este campo não pode ser vazio'),
    email: yup.string().email('O e-mail esta incorreto').required('Este campo não pode ser vazio'),
    password: yup.string().min(6, 'A senha não pode ter menos de 6 caracteres').required('Este campo não pode ser vazio')
})

