import { NextResponse } from "next/server";
import { supabase } from "../../lip/supabaseClient";

export async function GET() {
    const{ data } = await supabase
        .from("posts")
        .select("*")
        .order("id", { ascending: false });
    return NextResponse.json(data);
}

