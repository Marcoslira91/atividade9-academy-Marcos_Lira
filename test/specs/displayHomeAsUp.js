describe("Quarto fluxo", () => {
    it("Verificar se o título da pasta é App", async () => {
        const textoTitulo = await $("android.widget.TextView").getText();
        expect(textoTitulo).toBe("App");
    });

    it("Verificar se o botão App funciona", async () => {
       await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
       const visibilidadedeBotao =  await $('android=new UiSelector().text("Action Bar")className("android.widget.TextView")').isDisplayed(); //true;
       expect(visibilidadedeBotao).toBe(true);
    });

    it("Verificar se o botão Action Bar funciona", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar")className("android.widget.TextView")').click();
        const visibilidadedeBotao =  await $('android=new UiSelector().text("Action Bar Mechanics")className("android.widget.TextView")').isDisplayed(); //true;
        expect(visibilidadedeBotao).toBe(true);
     });

     it("Verificar se o botão Display options funciona", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar")className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options")className("android.widget.TextView")').click();
        const visibilidadedeBotao =  await $("id=toggle_home_as_up").isDisplayed(); //true;
        expect(visibilidadedeBotao).toBe(true);
     });

     it("Verificar se o botão DISPLAY_HOME_AS_UP funciona", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar")className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options")className("android.widget.TextView")').click();
        await $("id=toggle_home_as_up").click();
        const visibilidadedeBotao =  await $('android=new UiSelector().text("App/Action Bar/Display Options")className("android.widget.TextView")').isDisplayed(); //true;
        expect(visibilidadedeBotao).toBe(true);
     });
});