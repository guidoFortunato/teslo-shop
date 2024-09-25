"use server";

import prisma from "@/lib/prisma";

export const deleteUserAddress = async (userId: string) => {
  try {
    await prisma.userAddress.delete({
      where: {
        userId,
      },
    });

    return {
      ok: true,
    };
  } catch (error) {
    console.log({ error });
    throw new Error("No se pudo eliminar al dirección");
  }
};
