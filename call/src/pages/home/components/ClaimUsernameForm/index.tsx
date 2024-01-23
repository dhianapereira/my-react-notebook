import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormError } from "./styles";
import { ArrowRight } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/router";

const claimUsernameFormSchema = z.object({
    username: z
        .string()
        .trim()
        .min(3, { message: 'O usuário precisa ter pelo menos 3 letras' })
        .regex(/^([a-z\\-]+)$/i, { message: 'O usuário pode ter apenas letras e hifens' })
        .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema)
    })

    const router = useRouter()

    async function handleClaimUsername(data: ClaimUsernameFormData) {
        const { username } = data

        await router.push(`/register?username=${username}`)
    }

    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
                <TextInput
                    size="sm"
                    prefix="call.com/"
                    placeholder="seu-usuario"
                    crossOrigin="anonymous"
                    {...register('username')}
                />
                <Button size="sm" type="submit" disabled={isSubmitting}>
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