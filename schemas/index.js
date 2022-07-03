import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
    file: Yup.mixed().required('Required'),
    nom: Yup.string().required('Required').min(1, 'Too Short!'),
    matricule: Yup.string().required('Required').min(1, 'Too Short!'),
    departement: Yup.string().required('Required').min(1, 'Too Short!'),
    titre_memoire: Yup.string().required('Required').min(1, 'Too Short!'),
    mot_cle: Yup.string().required('Required').min(1, 'Too Short!'),
    membre_jury: Yup.string().required('Required').min(1, 'Too Short!'),
    directeur_memoire: Yup.string().required('Required').min(1, 'Too Short!'),
    description: Yup.string().required('Required').min(1, 'Too Short!')
})