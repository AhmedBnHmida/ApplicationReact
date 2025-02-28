 
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Alert } from "react-bootstrap";

const eventSchema = z.object({
    name:  z.string()
            .min(3, "Event name must be at least 3 characters long"),  
    description:   z.string()
                    .min(10, "Event description must be at least 10 characters long"),
    img:   z.any()
            .refine((file) => file.length > 0, "File is required")
            .refine((file) => file[0]?.size < 5 * 1024 * 1024, "Image size must be less than 5MB"),
});

const EventForm = () => {
    const [event, setEvent] = useState(
        {
            name: '',
            description: '',
            img: '',
            price: '',
            nbTickets: '',
            nbParticipants: 0,
            like: false,
    })

    const {
        register,   
        handleSubmit,
        setValue,
        formState: { errors },
    }=useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: event,
    });
    const onSubmit = async (data) => {
         const {name, description, img, price, nbTickets} = data;
         try{
           const eventResult = await addEvent({name, description, img: img[0].name, price, nbTickets, nbParticipants: 0, like: false});
         }catch(error) {
             console.log(error);
         }
         if(eventResult.status === 201) {
            Navigate('/events');
         }
     };
    return (
        <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    {...register("name")}
                    //register={register}
                    //error={errors.name}
                />
                {errors.name && ( <Alert variant="danger">{errors.name.message}</Alert>)
                //<p>{errors.name.message}</p>
                }
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    {...register("description")}
                    // error={errors.description}
                /> {errors.description && ( <Alert variant="danger">{errors.description.message}</Alert>)
                //<p>{errors.name.message}</p>
                }
            </Form.Group>
            <Form.Group controlId="img" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    name="img"
                    {...register("img")}
                    // error={errors.img}
                /> {errors.img && ( <Alert variant="danger">{errors.img.message}</Alert>)
                //<p>{errors.name.message}</p>
                }
            </Form.Group>
            <Form.Group controlId="price" className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    step="0.01"
                    {...register("price")}
                    // error={errors.price}
                />
                 {errors.price && ( <Alert variant="danger">{errors.price.message}</Alert>)
                //<p>{errors.name.message}</p>
                }
            </Form.Group>
            <Form.Group controlId="nbTickets" className="mb-3">
                <Form.Label>Number of tickets</Form.Label>
                <Form.Control
                    type="number"
                    name="nbTickets"
                    step={"1"}
                    {...register("nbTickets")}
                    // error={errors.nbTickets}
                />
                 {errors.nbTickets && ( <Alert variant="danger">{errors.nbTickets.message}</Alert>)
                //<p>{errors.name.message}</p>
                }
            </Form.Group>
            <Form.Group controlId="nbParticipants" className="mb-3">
                <Form.Label>Number of participants</Form.Label>
                <Form.Control
                    type="number"
                    name="nbParticipants"
                    step={"1"}
                    {...register("nbParticipants")}
                    // error={errors.nbParticipants}
                /> {errors.nbParticipants && ( <Alert variant="danger">{errors.nbParticipants.message}</Alert>)
                //<p>{errors.name.message}</p>
                }
            </Form.Group>
            <button type="submit" variant="primary" >Add</button>
            <button type="reset" variant="danger" onClick={() => Navigate('/events') }>Cancel</button>
        </Form>
    </>
    );
};

export default EventForm