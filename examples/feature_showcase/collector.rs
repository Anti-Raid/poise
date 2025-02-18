use crate::{Context, Error};
use poise::{serenity_prelude as serenity, CreateReply};

/// Boop the bot!
#[poise::command(prefix_command, track_edits, slash_command)]
pub async fn boop(ctx: Context<'_>) -> Result<(), Error> {
    let uuid_boop = ctx.id();

    let buttons = [serenity::CreateButton::new(format!("{uuid_boop}"))
        .style(serenity::ButtonStyle::Primary)
        .label("Boop me!")];

    let components = [serenity::CreateActionRow::buttons(&buttons)];
    let reply = CreateReply::default()
        .content("I want some boops!")
        .components(&components);

    ctx.send(reply).await?;

    let mut boop_count = 0;
    let shard_messenger = &ctx.serenity_context().shard;
    while let Some(mci) = serenity::ComponentInteractionCollector::new(shard_messenger.clone())
        .author_id(ctx.author().id)
        .channel_id(ctx.channel_id())
        .timeout(std::time::Duration::from_secs(120))
        .filter(move |mci| mci.data.custom_id.as_str() == uuid_boop.to_string())
        .await
    {
        boop_count += 1;

        let mut msg = mci.message.clone();
        msg.edit(
            ctx,
            serenity::EditMessage::new().content(format!("Boop count: {boop_count}")),
        )
        .await?;

        mci.create_response(ctx.http(), serenity::CreateInteractionResponse::Acknowledge)
            .await?;
    }

    Ok(())
}
