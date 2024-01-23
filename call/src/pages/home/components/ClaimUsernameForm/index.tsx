import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormError } from "./styles";
import { ArrowRight } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUsernameFormSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'O usuário precisa ter pelo menos 3 letras' })
        .regex(/^([a-z\\-]+)$/i, { message: 'O usuário pode ter apenas letras e hifens' })
        .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema)
    })

    async function handleClaimUsername(data: ClaimUsernameFormData) {

    }

    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
                <TextInput
                    size="sm"
                    prefix="cal.com/"
                    placeholder="seu-usuario"
                    crossOrigin="anonymous"
                    {...register('username')}
                />
                <Button size="sm" type="submit">
                    Reservar usuário
                    <ArrowRight />
                </Button>
            </Form>
            <FormError>
                <Text size="sm">
                    {errors.username ? errors.username.message : null}
                </Text>
            </FormError>
        </>
    )
}