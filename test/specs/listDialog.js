describe("Segundo fluxo", () => {
    it("Verificar se o título da pasta é App", async () => {
        const textoTitulo = await $("android.widget.TextView").getText();
        expect(textoTitulo).toBe("App");
    });

    it("Verificar se o botão App funciona", async () => {
       await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
       const visibilidadedeBotao =  await $("id=action_bar").isDisplayed(); //true;
       expect(visibilidadedeBotao).toBe(true);
    });

    it("Verificar se o botão Alert Dialogs funciona", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $("id=action_bar").click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const visibilidadedeBotao =  await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed(); //true;
        expect(visibilidadedeBotao).toBe(true);
     });

     it("Verificar se o botão OK Cancel dialog with a message", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $("id=action_bar").click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        const visibilidadedeBotao =  await $("id=alertTitle").isDisplayed(); //true;
        expect(visibilidadedeBotao).toBe(true);
       });

});