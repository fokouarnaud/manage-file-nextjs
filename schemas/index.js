import * as Yup from 'yup'
import {items_departement,items_type_doc,items_annee} from '../lib/data';
const array_departement=items_departement.filter(item=>item.id!=1).map(item=>item.name);
const array_type_doc=items_type_doc.filter(item=>item.id!=1).map(item=>item.name);
const array_annee=items_annee.filter(item=>item.id!=1).map(item=>item.name);


export const registerSchema = Yup.object().shape({
    file: Yup.mixed().required('Required'),
    nom: Yup.string().required('Required').min(1, 'Too Short!'),
    matricule: Yup.string().required('Required').min(1, 'Too Short!'),
    departement: Yup.string().required('Required'),
    annee_soutenance: Yup.string().required('Required'),
    type_doc: Yup.string().required('Required'),
    titre_memoire: Yup.string().required('Required').min(1, 'Too Short!'),
    mot_cle: Yup.string().required('Required').min(1, 'Too Short!'),
    membre_jury: Yup.string().required('Required').min(1, 'Too Short!'),
    description: Yup.string().required('Required').min(1, 'Too Short!')
})
export const ficheDepotSchema = Yup.object().shape({
  
    matricule: Yup.string().required('Required').min(1, 'Too Short!'),
   
})
export const updateWithFileSchema = Yup.object().shape({
    file: Yup.mixed().required('Required'),
    nom: Yup.string().required('Required').min(1, 'Too Short!'),
    matricule: Yup.string().required('Required').min(1, 'Too Short!'),
    departement: Yup.string().required('Required'),
    annee_soutenance: Yup.string().required('Required'),
    type_doc: Yup.string().required('Required'),
    titre_memoire: Yup.string().required('Required').min(1, 'Too Short!'),
    mot_cle: Yup.string().required('Required').min(1, 'Too Short!'),
    membre_jury: Yup.string().required('Required').min(1, 'Too Short!'),
    description: Yup.string().required('Required').min(1, 'Too Short!')
})

export const updateWithoutFileSchema = Yup.object().shape({
    source_doc: Yup.mixed().required('Required'),
    nom: Yup.string().required('Required').min(1, 'Too Short!'),
    matricule: Yup.string().required('Required').min(1, 'Too Short!'),
    departement: Yup.string().required('Required'),
    annee_soutenance: Yup.string().required('Required'),
    type_doc: Yup.string().required('Required'),
    titre_memoire: Yup.string().required('Required').min(1, 'Too Short!'),
    mot_cle: Yup.string().required('Required').min(1, 'Too Short!'),
    membre_jury: Yup.string().required('Required').min(1, 'Too Short!'),
    description: Yup.string().required('Required').min(1, 'Too Short!')
})