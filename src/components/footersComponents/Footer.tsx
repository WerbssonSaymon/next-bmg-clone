import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center w-full bg-violet-900">
            <div className="w-[50%] my-5">
                <div className="flex gap-5">
                    <Card className="w-[300px] bg-transparent my-4">
                        <CardHeader>
                            <CardTitle className="text-white text-xl">WhatsApp do Bmg</CardTitle>
                            <CardDescription className="text-white text-md">Atendimento, fatura e dividas</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[300px] bg-transparent my-4">
                        <CardHeader>
                            <CardTitle className="text-white text-xl">Encontre o Bmg</CardTitle>
                            <CardDescription className="text-white text-md">Conheça as lojas em todo o Brasil</CardDescription>
                        </CardHeader>
                    </Card>
                    <div className="w-[300px] my-4 flex flex-col items-start justify-center">
                        <p className="text-white text-xl">Siga o Bmg</p>
                        <ToggleGroup type="single" className="gap-4 my-2">
                            <ToggleGroupItem value="a" className="bg-white p-5 rounded-full">
                                <IconBrandFacebook/>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="b" className="bg-white p-5 rounded-full">
                                <IconBrandInstagram/>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="c" className="bg-white p-5 rounded-full">
                                <IconBrandTwitter/>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="b" className="bg-white p-5 rounded-full">
                                <IconBrandLinkedin/>
                            </ToggleGroupItem>
                            <ToggleGroupItem value="c" className="bg-white p-5 rounded-full">
                                <IconBrandYoutube/>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
                <div>
                    baixo
                </div>
            </div>
        </div>
    )
}